/* ═══════════════════════════════════════════════
   NGO Admin Portal — app.js
   AES-256 (via CryptoJS) for Notes encryption
═══════════════════════════════════════════════ */

'use strict';

// ─── State ───────────────────────────────────────
let encKey = '';          // In-memory only — never persisted
let currentPage = 'dashboard';
let uploadFiles = [];     // Files queued for upload
let allNotes = [];        // Cached notes
let noteFilter = 'all';
let allUploads = [];
let uploadFilter = 'all';

// ─── Encryption helpers ──────────────────────────
const encrypt = (text) => {
  if (!encKey) return text;
  return CryptoJS.AES.encrypt(text, encKey).toString();
};
const decrypt = (cipher) => {
  if (!encKey) return '🔐 Set your encryption key above to read this note.';
  try {
    const bytes = CryptoJS.AES.decrypt(cipher, encKey);
    const plain = bytes.toString(CryptoJS.enc.Utf8);
    return plain || '⚠️ Wrong key — cannot decrypt this note.';
  } catch {
    return '⚠️ Decryption failed — wrong key?';
  }
};
const looksEncrypted = (s) => /^U2FsdGVkX1/.test(s);  // CryptoJS AES prefix

// ─── API helpers ─────────────────────────────────
async function api(method, url, body, isFormData = false) {
  const opts = { method, credentials: 'include' };
  if (body) {
    if (isFormData) {
      opts.body = body;
    } else {
      opts.headers = { 'Content-Type': 'application/json' };
      opts.body = JSON.stringify(body);
    }
  }
  const res = await fetch(url, opts);
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || json.errors?.[0]?.msg || 'Request failed');
  return json;
}

// ─── Toast ───────────────────────────────────────
function toast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  c.appendChild(el);
  setTimeout(() => el.remove(), 3100);
}

// ─── Modal ───────────────────────────────────────
function openModal(title, bodyHTML, onSubmit) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-submit').onclick = onSubmit;
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ─── Navigation ──────────────────────────────────
function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
  document.getElementById(`page-${page}`)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === page);
  });
  const titles = {
    dashboard: 'Dashboard', volunteers: 'Volunteers', members: 'Members',
    events: 'Events', donations: 'Donations', uploads: 'Files & Media', notes: 'Notes'
  };
  document.getElementById('topbar-title').textContent = titles[page] || page;
  // Load data
  if (page === 'dashboard')  loadStats();
  if (page === 'volunteers') loadVolunteers();
  if (page === 'members')    loadMembers();
  if (page === 'events')     loadEvents();
  if (page === 'donations')  loadDonations();
  if (page === 'uploads')    loadUploads();
  if (page === 'notes')      loadNotes();
  // Mobile: close sidebar
  document.getElementById('sidebar').classList.remove('open');
}

// ─────────────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────────────
async function checkAuth() {
  try {
    const data = await api('GET', '/api/auth/me');
    if (data.success) {
      encKey = sessionStorage.getItem('encKey') || '';
      showApp(data.user.username);
    }
  } catch {
    showLogin();
  }
}

function showLogin() {
  document.getElementById('login-page').classList.add('active');
  document.getElementById('app-page').classList.remove('active');
}
function showApp(username) {
  document.getElementById('login-page').classList.remove('active');
  document.getElementById('app-page').classList.add('active');
  document.getElementById('sidebar-user').textContent = username;
  navigateTo('dashboard');
}

// Login form
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');
  errEl.classList.remove('show');
  document.getElementById('err-username').textContent = '';
  document.getElementById('err-password').textContent = '';

  let valid = true;
  if (!u) { document.getElementById('err-username').textContent = 'Username is required'; valid = false; }
  if (!p) { document.getElementById('err-password').textContent = 'Password is required'; valid = false; }
  if (!valid) return;

  const btn = document.getElementById('login-btn');
  btn.querySelector('.btn-text').classList.add('hidden');
  btn.querySelector('.btn-spinner').classList.remove('hidden');

  try {
    const data = await api('POST', '/api/auth/login', { username: u, password: p });
    if (data.success) {
      encKey = p;
      sessionStorage.setItem('encKey', p);
      showApp(u);
    }
  } catch (err) {
    errEl.textContent = err.message || 'Invalid credentials';
    errEl.classList.add('show');
  } finally {
    btn.querySelector('.btn-text').classList.remove('hidden');
    btn.querySelector('.btn-spinner').classList.add('hidden');
  }
});

// Toggle password visibility
document.getElementById('toggle-pw').addEventListener('click', () => {
  const inp = document.getElementById('login-password');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});

// Logout
document.getElementById('logout-btn').addEventListener('click', async () => {
  await api('POST', '/api/auth/logout');
  encKey = '';
  sessionStorage.removeItem('encKey');
  showLogin();
  toast('Logged out successfully', 'info');
});

// Sidebar & hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
});
document.getElementById('sidebar-close').addEventListener('click', () => {
  document.getElementById('sidebar').classList.remove('open');
});
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

// Modal close
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-cancel').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

// ─────────────────────────────────────────────────
//  DASHBOARD STATS
// ─────────────────────────────────────────────────
async function loadStats() {
  try {
    const data = await api('GET', '/api/stats');
    const s = data.stats;
    document.getElementById('stat-vol-num').textContent = s.volunteers;
    document.getElementById('stat-mem-num').textContent = s.members;
    document.getElementById('stat-evt-num').textContent = s.events;
    document.getElementById('stat-don-num').textContent = '₹' + s.totalDonations.toLocaleString('en-IN');
  } catch (err) {
    toast('Could not load stats: ' + err.message, 'error');
  }
}

// ─────────────────────────────────────────────────
//  VOLUNTEERS
// ─────────────────────────────────────────────────
async function loadVolunteers() {
  const list = document.getElementById('vol-list');
  list.innerHTML = '<p style="color:var(--text-muted);padding:20px">Loading…</p>';
  try {
    const data = await api('GET', '/api/volunteers');
    renderVolunteers(data.data);
  } catch (err) { toast(err.message, 'error'); }
}
function renderVolunteers(vols) {
  const list = document.getElementById('vol-list');
  if (!vols.length) { list.innerHTML = emptyState('🙋', 'No volunteers yet. Add your first one!'); return; }
  list.innerHTML = vols.map(v => `
    <div class="list-card">
      <div class="list-card-avatar">🙋</div>
      <div class="list-card-info">
        <div class="list-card-name">${v.name}</div>
        <div class="list-card-meta">${v.email || ''}${v.phone ? ' · ' + v.phone : ''}
          <span class="badge ${v.active ? 'badge-green' : 'badge-orange'}">${v.active ? 'Active' : 'Inactive'}</span>
        </div>
      </div>
      <div class="list-card-actions">
        <button class="btn btn-danger btn-sm" onclick="deleteVolunteer('${v._id}')">🗑</button>
      </div>
    </div>
  `).join('');
}
const uploadCsvBtn = document.getElementById('upload-csv-btn');
const volCsvInput = document.getElementById('vol-csv-input');
if (uploadCsvBtn) {
  uploadCsvBtn.addEventListener('click', () => volCsvInput.click());
  volCsvInput.addEventListener('change', async () => {
    const file = volCsvInput.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    try {
      await api('POST', '/api/volunteers/upload', fd, true);
      toast('Volunteer CSV updated successfully!', 'success');
      loadVolunteers();
    } catch (err) {
      toast(err.message, 'error');
    } finally {
      volCsvInput.value = '';
    }
  });
}

document.getElementById('add-vol-btn').addEventListener('click', () => {
  openModal('Add Volunteer', `
    <div class="modal-form-group">
      <label>Name *</label>
      <input type="text" id="vol-name" placeholder="Full name" maxlength="100"/>
      <span class="modal-field-error" id="vol-name-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Email</label>
      <input type="email" id="vol-email" placeholder="email@example.com"/>
      <span class="modal-field-error" id="vol-email-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Phone</label>
      <input type="tel" id="vol-phone" placeholder="+91 XXXXX XXXXX"/>
    </div>
    <div class="modal-form-group">
      <label>Skills</label>
      <input type="text" id="vol-skills" placeholder="e.g. Teaching, Medical, IT"/>
    </div>
  `, submitVolunteer);
});
async function submitVolunteer() {
  const name  = document.getElementById('vol-name').value.trim();
  const email = document.getElementById('vol-email').value.trim();
  const phone = document.getElementById('vol-phone').value.trim();
  const skills = document.getElementById('vol-skills').value.trim();
  document.getElementById('vol-name-err').textContent = '';
  document.getElementById('vol-email-err').textContent = '';
  if (!name) { document.getElementById('vol-name-err').textContent = 'Name is required'; return; }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('vol-email-err').textContent = 'Invalid email'; return;
  }
  try {
    await api('POST', '/api/volunteers', { name, email, phone, skills: skills ? skills.split(',').map(s=>s.trim()) : [] });
    closeModal(); toast('Volunteer added!', 'success'); loadVolunteers(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}
async function deleteVolunteer(id) {
  if (!confirm('Delete this volunteer?')) return;
  try {
    await api('DELETE', `/api/volunteers/${id}`);
    toast('Volunteer removed', 'info'); loadVolunteers(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}

// ─────────────────────────────────────────────────
//  MEMBERS
// ─────────────────────────────────────────────────
async function loadMembers() {
  const list = document.getElementById('mem-list');
  list.innerHTML = '<p style="color:var(--text-muted);padding:20px">Loading…</p>';
  try {
    const data = await api('GET', '/api/members');
    renderMembers(data.data);
  } catch (err) { toast(err.message, 'error'); }
}
function renderMembers(mems) {
  const list = document.getElementById('mem-list');
  if (!mems.length) { list.innerHTML = emptyState('👥', 'No members yet. Add your first one!'); return; }
  list.innerHTML = mems.map(m => `
    <div class="list-card">
      <div class="list-card-avatar">👥</div>
      <div class="list-card-info">
        <div class="list-card-name">${m.name}</div>
        <div class="list-card-meta">${m.email || ''}${m.membershipType ? ' · ' + m.membershipType : ''}
          <span class="badge ${m.active ? 'badge-green' : 'badge-orange'}">${m.active ? 'Active' : 'Inactive'}</span>
        </div>
      </div>
      <div class="list-card-actions">
        <button class="btn btn-danger btn-sm" onclick="deleteMember('${m._id}')">🗑</button>
      </div>
    </div>
  `).join('');
}
document.getElementById('add-mem-btn').addEventListener('click', () => {
  openModal('Add Member', `
    <div class="modal-form-group">
      <label>Name *</label>
      <input type="text" id="mem-name" placeholder="Full name" maxlength="100"/>
      <span class="modal-field-error" id="mem-name-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Email</label>
      <input type="email" id="mem-email" placeholder="email@example.com"/>
      <span class="modal-field-error" id="mem-email-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Phone</label>
      <input type="tel" id="mem-phone" placeholder="+91 XXXXX XXXXX"/>
    </div>
    <div class="modal-form-group">
      <label>Membership Type</label>
      <select id="mem-type">
        <option value="general">General</option>
        <option value="lifetime">Lifetime</option>
        <option value="honorary">Honorary</option>
      </select>
    </div>
  `, submitMember);
});
async function submitMember() {
  const name  = document.getElementById('mem-name').value.trim();
  const email = document.getElementById('mem-email').value.trim();
  const phone = document.getElementById('mem-phone').value.trim();
  const membershipType = document.getElementById('mem-type').value;
  document.getElementById('mem-name-err').textContent = '';
  document.getElementById('mem-email-err').textContent = '';
  if (!name) { document.getElementById('mem-name-err').textContent = 'Name is required'; return; }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('mem-email-err').textContent = 'Invalid email'; return;
  }
  try {
    await api('POST', '/api/members', { name, email, phone, membershipType });
    closeModal(); toast('Member added!', 'success'); loadMembers(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}
async function deleteMember(id) {
  if (!confirm('Delete this member?')) return;
  try {
    await api('DELETE', `/api/members/${id}`);
    toast('Member removed', 'info'); loadMembers(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}

// ─────────────────────────────────────────────────
//  EVENTS
// ─────────────────────────────────────────────────
async function loadEvents() {
  const list = document.getElementById('evt-list');
  list.innerHTML = '<p style="color:var(--text-muted);padding:20px">Loading…</p>';
  try {
    const data = await api('GET', '/api/events');
    renderEvents(data.data);
  } catch (err) { toast(err.message, 'error'); }
}
function renderEvents(evts) {
  const list = document.getElementById('evt-list');
  if (!evts.length) { list.innerHTML = emptyState('📅', 'No events yet. Create your first event!'); return; }
  list.innerHTML = evts.map(ev => `
    <div class="list-card">
      <div class="list-card-avatar">📅</div>
      <div class="list-card-info">
        <div class="list-card-name">${ev.name}</div>
        <div class="list-card-meta">${ev.date ? new Date(ev.date).toLocaleDateString('en-IN') : ''}
          ${ev.location ? ' · 📍 ' + ev.location : ''}
          ${ev.attendees !== undefined ? ' · 👤 ' + ev.attendees + ' attendees' : ''}
          ${ev.googleFormUrl ? ` · <a href="${ev.googleFormUrl}" target="_blank" style="color:var(--orange)">📋 Form</a>` : ''}
        </div>
      </div>
      <div class="list-card-actions">
        <button class="btn btn-danger btn-sm" onclick="deleteEvent('${ev._id}')">🗑</button>
      </div>
    </div>
  `).join('');
}
document.getElementById('add-evt-btn').addEventListener('click', () => {
  openModal('Add Event', `
    <div class="modal-form-group">
      <label>Event Name *</label>
      <input type="text" id="evt-name" placeholder="Event name" maxlength="150"/>
      <span class="modal-field-error" id="evt-name-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Date *</label>
      <input type="date" id="evt-date"/>
      <span class="modal-field-error" id="evt-date-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Location</label>
      <input type="text" id="evt-loc" placeholder="City / Venue"/>
    </div>
    <div class="modal-form-group">
      <label>Number of Attendees</label>
      <input type="number" id="evt-att" min="0" placeholder="0"/>
    </div>
    <div class="modal-form-group">
      <label>Google Form URL (optional)</label>
      <input type="url" id="evt-form" placeholder="https://forms.google.com/..."/>
    </div>
    <div class="modal-form-group">
      <label>Description</label>
      <textarea id="evt-desc" placeholder="Event description…" rows="3"></textarea>
    </div>
  `, submitEvent);
});
async function submitEvent() {
  const name = document.getElementById('evt-name').value.trim();
  const date = document.getElementById('evt-date').value;
  const location = document.getElementById('evt-loc').value.trim();
  const attendees = document.getElementById('evt-att').value;
  const googleFormUrl = document.getElementById('evt-form').value.trim();
  const description = document.getElementById('evt-desc').value.trim();
  document.getElementById('evt-name-err').textContent = '';
  document.getElementById('evt-date-err').textContent = '';
  if (!name) { document.getElementById('evt-name-err').textContent = 'Event name is required'; return; }
  if (!date)  { document.getElementById('evt-date-err').textContent = 'Date is required'; return; }
  try {
    await api('POST', '/api/events', { name, date, location, attendees: attendees ? parseInt(attendees) : 0, googleFormUrl, description });
    closeModal(); toast('Event created!', 'success'); loadEvents(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}
async function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  try {
    await api('DELETE', `/api/events/${id}`);
    toast('Event deleted', 'info'); loadEvents(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}

// ─────────────────────────────────────────────────
//  DONATIONS
// ─────────────────────────────────────────────────
async function loadDonations() {
  const list = document.getElementById('don-list');
  list.innerHTML = '<p style="color:var(--text-muted);padding:20px">Loading…</p>';
  try {
    const data = await api('GET', '/api/donations');
    renderDonations(data.data);
  } catch (err) { toast(err.message, 'error'); }
}
function renderDonations(dons) {
  const list = document.getElementById('don-list');
  if (!dons.length) { list.innerHTML = emptyState('💛', 'No donations recorded yet.'); return; }
  list.innerHTML = dons.map(d => `
    <div class="list-card">
      <div class="list-card-avatar">💛</div>
      <div class="list-card-info">
        <div class="list-card-name">₹${Number(d.amount).toLocaleString('en-IN')} — ${d.donorName || 'Anonymous'}</div>
        <div class="list-card-meta">${d.date ? new Date(d.date).toLocaleDateString('en-IN') : ''}
          ${d.paymentMethod ? ' · ' + d.paymentMethod : ''}
          ${d.purpose ? ' · ' + d.purpose : ''}
          <span class="badge badge-green">${d.status || 'received'}</span>
        </div>
      </div>
      <div class="list-card-actions">
        <button class="btn btn-danger btn-sm" onclick="deleteDonation('${d._id}')">🗑</button>
      </div>
    </div>
  `).join('');
}
document.getElementById('add-don-btn').addEventListener('click', () => {
  openModal('Record Donation', `
    <div class="modal-form-group">
      <label>Amount (₹) *</label>
      <input type="number" id="don-amt" min="1" placeholder="e.g. 1000"/>
      <span class="modal-field-error" id="don-amt-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Donor Name</label>
      <input type="text" id="don-name" placeholder="Donor name (or leave blank for Anonymous)"/>
    </div>
    <div class="modal-form-group">
      <label>Date *</label>
      <input type="date" id="don-date" value="${new Date().toISOString().split('T')[0]}"/>
    </div>
    <div class="modal-form-group">
      <label>Payment Method</label>
      <select id="don-method">
        <option value="cash">Cash</option>
        <option value="upi">UPI</option>
        <option value="bank_transfer">Bank Transfer</option>
        <option value="cheque">Cheque</option>
        <option value="online">Online</option>
      </select>
    </div>
    <div class="modal-form-group">
      <label>Purpose</label>
      <input type="text" id="don-purpose" placeholder="e.g. Education Fund"/>
    </div>
  `, submitDonation);
});
async function submitDonation() {
  const amount = parseFloat(document.getElementById('don-amt').value);
  const donorName = document.getElementById('don-name').value.trim();
  const date = document.getElementById('don-date').value;
  const paymentMethod = document.getElementById('don-method').value;
  const purpose = document.getElementById('don-purpose').value.trim();
  document.getElementById('don-amt-err').textContent = '';
  if (!amount || amount <= 0) { document.getElementById('don-amt-err').textContent = 'Valid amount is required'; return; }
  try {
    await api('POST', '/api/donations', { amount, donorName, date, paymentMethod, purpose });
    closeModal(); toast('Donation recorded!', 'success'); loadDonations(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}
async function deleteDonation(id) {
  if (!confirm('Delete this donation record?')) return;
  try {
    await api('DELETE', `/api/donations/${id}`);
    toast('Donation removed', 'info'); loadDonations(); loadStats();
  } catch (err) { toast(err.message, 'error'); }
}

// ─────────────────────────────────────────────────
//  UPLOADS
// ─────────────────────────────────────────────────
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('file-input');

dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault(); dropzone.classList.remove('drag-over');
  addFiles([...e.dataTransfer.files]);
});
fileInput.addEventListener('change', () => { addFiles([...fileInput.files]); fileInput.value = ''; });

function addFiles(files) {
  files.forEach(f => {
    if (!uploadFiles.find(x => x.name === f.name && x.size === f.size)) uploadFiles.push(f);
  });
  renderUploadPreview();
}
function renderUploadPreview() {
  const el = document.getElementById('upload-preview');
  el.innerHTML = uploadFiles.map((f, i) => `
    <div class="upload-preview-chip">
      <span>${fileEmoji(f.name)}</span>
      <span>${f.name.length > 22 ? f.name.slice(0,20)+'…' : f.name}</span>
      <span style="color:var(--text-muted);font-size:.7rem">${formatSize(f.size)}</span>
      <button onclick="removeUploadFile(${i})">✕</button>
    </div>
  `).join('');
}
window.removeUploadFile = (i) => { uploadFiles.splice(i, 1); renderUploadPreview(); };

document.getElementById('do-upload-btn').addEventListener('click', async () => {
  if (!uploadFiles.length) { toast('Please select files first', 'error'); return; }
  const desc = document.getElementById('upload-desc').value.trim();
  const fd = new FormData();
  uploadFiles.forEach(f => fd.append('files', f));
  if (desc) fd.append('description', desc);
  try {
    await api('POST', '/api/uploads', fd, true);
    uploadFiles = [];
    document.getElementById('upload-desc').value = '';
    renderUploadPreview();
    toast('Files uploaded!', 'success');
    loadUploads();
  } catch (err) { toast(err.message, 'error'); }
});

async function loadUploads() {
  try {
    const data = await api('GET', '/api/uploads');
    allUploads = data.data;
    renderFileGrid();
  } catch (err) { toast(err.message, 'error'); }
}

function renderFileGrid() {
  const grid = document.getElementById('file-grid');
  const filtered = uploadFilter === 'all' ? allUploads : allUploads.filter(f => f.category === uploadFilter);
  if (!filtered.length) { grid.innerHTML = emptyState('📁', 'No files found in this category.'); return; }
  const images = /jpeg|jpg|png|gif|webp/;
  grid.innerHTML = filtered.map(f => {
    const ext = f.originalName.split('.').pop().toLowerCase();
    const isImg = images.test(ext);
    return `
      <div class="file-card">
        <button class="file-card-del" title="Delete" onclick="deleteUpload('${f._id}')">🗑</button>
        ${isImg ? `<img src="/uploads/${f.storedName}" alt="${f.originalName}" loading="lazy"/>` : `<div class="file-card-icon">${fileEmoji(f.originalName)}</div>`}
        <div class="file-card-name" title="${f.originalName}">${f.originalName.length > 24 ? f.originalName.slice(0,22)+'…' : f.originalName}</div>
        <div class="file-card-size">${formatSize(f.size)}</div>
        <div class="file-card-actions">
          <a href="/api/uploads/${f._id}/download" class="btn btn-secondary btn-sm">⬇ Download</a>
        </div>
      </div>
    `;
  }).join('');
}

async function deleteUpload(id) {
  if (!confirm('Delete this file permanently?')) return;
  try {
    await api('DELETE', `/api/uploads/${id}`);
    toast('File deleted', 'info'); loadUploads();
  } catch (err) { toast(err.message, 'error'); }
}

// Filter tabs
document.getElementById('upload-filter-tabs').addEventListener('click', (e) => {
  if (!e.target.classList.contains('tab-btn')) return;
  document.querySelectorAll('#upload-filter-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  uploadFilter = e.target.dataset.filter;
  renderFileGrid();
});

// ─────────────────────────────────────────────────
//  NOTES  (AES-256 encrypted via CryptoJS)
// ─────────────────────────────────────────────────

async function loadNotes() {
  try {
    const data = await api('GET', '/api/notes');
    allNotes = data.data;
    renderNotes();
  } catch (err) { toast(err.message, 'error'); }
}

function renderNotes() {
  const grid = document.getElementById('notes-list');
  let notes = allNotes;
  if (noteFilter === 'pending') notes = notes.filter(n => !n.isDone);
  if (noteFilter === 'done')    notes = notes.filter(n => n.isDone);

  if (!notes.length) { grid.innerHTML = emptyState('📝', 'No notes yet. Create your first note!'); return; }

  grid.innerHTML = notes.map(n => {
    const isEnc = looksEncrypted(n.content);
    const displayContent = isEnc ? decrypt(n.content) : n.content;
    const tags = (n.tags || []).map(t => `<span class="note-tag">${t}</span>`).join('');
    const dateStr = new Date(n.updatedAt || n.createdAt).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
    return `
      <div class="note-card ${n.isDone ? 'done' : ''}" id="note-${n._id}">
        <div class="note-card-top">
          <button class="note-checkbox ${n.isDone ? 'checked' : ''}" onclick="toggleNote('${n._id}')" title="Toggle done">${n.isDone ? '✓' : ''}</button>
          <span class="note-title">${escHtml(n.title)}</span>
          <span class="note-priority priority-${n.priority}">${n.priority}</span>
        </div>
        ${isEnc ? `<div class="note-enc-icon">🔐 Encrypted content</div>` : ''}
        <div class="note-content">${escHtml(displayContent).slice(0, 300)}${displayContent.length > 300 ? '…' : ''}</div>
        ${tags ? `<div class="note-tags">${tags}</div>` : ''}
        <div class="note-footer">
          <span class="note-date">📅 ${dateStr}</span>
          <div class="note-actions">
            <button class="btn btn-secondary btn-sm" onclick="editNote('${n._id}')">✏️ Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteNote('${n._id}')">🗑</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Note filter tabs
document.querySelectorAll('#page-notes .tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#page-notes .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    noteFilter = btn.dataset.filter;
    renderNotes();
  });
});

// Toggle done
async function toggleNote(id) {
  try {
    const data = await api('PATCH', `/api/notes/${id}/toggle`);
    const idx = allNotes.findIndex(n => n._id === id);
    if (idx >= 0) allNotes[idx] = data.data;
    renderNotes();
  } catch (err) { toast(err.message, 'error'); }
}

// Add note
document.getElementById('add-note-btn').addEventListener('click', () => {
  openModal('📝 New Note', noteFormHTML(), async () => {
    const title   = document.getElementById('note-title').value.trim();
    const content = document.getElementById('note-content').value.trim();
    const priority = document.getElementById('note-priority').value;
    const tags    = document.getElementById('note-tags').value.trim().split(',').map(t=>t.trim()).filter(Boolean);
    document.getElementById('note-title-err').textContent = '';
    document.getElementById('note-content-err').textContent = '';
    if (!title)   { document.getElementById('note-title-err').textContent = 'Title is required'; return; }
    if (!content) { document.getElementById('note-content-err').textContent = 'Content is required'; return; }
    const encContent = encKey ? encrypt(content) : content;
    try {
      await api('POST', '/api/notes', { title, content: encContent, priority, tags });
      closeModal(); toast('Note saved & encrypted!', 'success'); loadNotes();
    } catch (err) { toast(err.message, 'error'); }
  });
});

// Edit note
async function editNote(id) {
  const note = allNotes.find(n => n._id === id);
  if (!note) return;
  const isEnc = looksEncrypted(note.content);
  const plainContent = isEnc ? (encKey ? decrypt(note.content) : '') : note.content;
  openModal('✏️ Edit Note', noteFormHTML(note, plainContent), async () => {
    const title   = document.getElementById('note-title').value.trim();
    const content = document.getElementById('note-content').value.trim();
    const priority = document.getElementById('note-priority').value;
    const tags    = document.getElementById('note-tags').value.trim().split(',').map(t=>t.trim()).filter(Boolean);
    document.getElementById('note-title-err').textContent = '';
    document.getElementById('note-content-err').textContent = '';
    if (!title)   { document.getElementById('note-title-err').textContent = 'Title is required'; return; }
    if (!content) { document.getElementById('note-content-err').textContent = 'Content is required'; return; }
    const encContent = encKey ? encrypt(content) : content;
    try {
      const updated = await api('PUT', `/api/notes/${id}`, { title, content: encContent, priority, tags });
      const idx = allNotes.findIndex(n => n._id === id);
      if (idx >= 0) allNotes[idx] = updated.data;
      closeModal(); toast('Note updated!', 'success'); renderNotes();
    } catch (err) { toast(err.message, 'error'); }
  });
}

async function deleteNote(id) {
  if (!confirm('Delete this note permanently?')) return;
  try {
    await api('DELETE', `/api/notes/${id}`);
    allNotes = allNotes.filter(n => n._id !== id);
    toast('Note deleted', 'info'); renderNotes();
  } catch (err) { toast(err.message, 'error'); }
}

function noteFormHTML(note = {}, plainContent = '') {
  const priorities = ['low','medium','high'].map(p =>
    `<option value="${p}" ${(note.priority || 'medium') === p ? 'selected' : ''}>${p.charAt(0).toUpperCase()+p.slice(1)}</option>`
  ).join('');
  return `
    ${!encKey ? '<div style="background:#fff7ed;border:1px solid #fdba74;border-radius:8px;padding:10px 14px;font-size:.83rem;color:#92400e;margin-bottom:16px">⚠️ No encryption key set — note will be stored as plain text. Set a key above for end-to-end encryption.</div>' : '<div style="background:#d1fae5;border:1px solid #6ee7b7;border-radius:8px;padding:8px 14px;font-size:.83rem;color:#065f46;margin-bottom:16px">🔐 Content will be AES-256 encrypted before saving.</div>'}
    <div class="modal-form-group">
      <label>Title *</label>
      <input type="text" id="note-title" placeholder="Note title" maxlength="200" value="${escHtml(note.title || '')}"/>
      <span class="modal-field-error" id="note-title-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Content *</label>
      <textarea id="note-content" placeholder="Write your note here…" rows="5">${escHtml(plainContent || '')}</textarea>
      <span class="modal-field-error" id="note-content-err"></span>
    </div>
    <div class="modal-form-group">
      <label>Priority</label>
      <select id="note-priority">${priorities}</select>
    </div>
    <div class="modal-form-group">
      <label>Tags (comma-separated)</label>
      <input type="text" id="note-tags" placeholder="e.g. important, finance, event" value="${(note.tags||[]).join(', ')}"/>
    </div>
  `;
}

// ─────────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────────
function emptyState(icon, text) {
  return `<div class="empty-state"><div class="empty-state-icon">${icon}</div><p>${text}</p></div>`;
}
function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024*1024) return (bytes/1024).toFixed(1) + ' KB';
  return (bytes/(1024*1024)).toFixed(1) + ' MB';
}
function fileEmoji(name) {
  const ext = name.split('.').pop().toLowerCase();
  const map = { pdf:'📄', doc:'📝', docx:'📝', xls:'📊', xlsx:'📊', ppt:'📑', pptx:'📑',
    txt:'📃', csv:'📊', zip:'🗜', mp4:'🎬', mp3:'🎵', jpg:'🖼', jpeg:'🖼', png:'🖼', gif:'🖼', webp:'🖼' };
  return map[ext] || '📁';
}

// Make accessible globally (onclick in HTML)
window.deleteVolunteer = deleteVolunteer;
window.deleteMember    = deleteMember;
window.deleteEvent     = deleteEvent;
window.deleteDonation  = deleteDonation;
window.deleteUpload    = deleteUpload;
window.deleteNote      = deleteNote;
window.editNote        = editNote;
window.toggleNote      = toggleNote;
window.navigateTo      = navigateTo;

// ─── Init ────────────────────────────────────────
checkAuth();
