.outer-wrapper {
  width: 100%;
  background: #fff;
  margin-top: 50px;
  padding-bottom: 60px;

  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }
}

.inner-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0 20px;
}

/* ── Left side: orange girl + Contact Us ── */
.hero-image-side {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  h2 {
    font-family: Axiforma Black;
    font-size: 49px;
    line-height: 54px;
    color: #383336;
    position: absolute;
    left: 220px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 22px;
      left: 160px;
    }
    img {
      width: 220px !important;
      height: auto !important;
    }
  }
}

/* ── Right side: CTA banner ── */
.cta-side {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
}

.cta-banner {
  display: flex;
  align-items: center;
  gap: 24px;
  background: linear-gradient(90deg, #f5a52b 0%, #f9c15e 100%);
  border-radius: 100px;
  padding: 20px 40px 20px 20px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 8px 32px rgba(245, 165, 43, 0.35);

  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 32px;
    padding: 28px 24px;
    text-align: center;
    max-width: 100%;
  }
}

.cta-icon-circle {
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.cta-gif {
  width: 56px;
  height: 56px;
  object-fit: contain;
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-family: Axiforma Black;
    font-size: 22px;
    line-height: 28px;
    color: #fff;
    margin: 0;
  }

  p {
    font-family: Axiforma Regular;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  }
}

.cta-button {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 28px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-family: Axiforma Bold;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  width: 100%;

  &:hover {
    background: #fff;
    color: #f5a52b;
  }
}

/* ── Mobile: stack vertically ── */
@media (max-width: 768px) {
  .inner-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .hero-image-side {
    width: 100%;
    justify-content: center;
  }

  .cta-side {
    width: 100%;
  }
}