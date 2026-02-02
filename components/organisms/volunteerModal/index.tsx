import Image from 'next/image'
import Modal from '../../molecules/modal'
import styles from './volunteerModal.module.scss'
import { ChangeEvent, FormEvent, FunctionComponent } from 'react'
import React, {useState} from 'react'
import Button from '../../atoms/button'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'
interface Props {
  isOpen: boolean
  onClose: () => void
}

const Index: FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    gender: '',
    interests: {
      teaching: false,
      sports: false,
      peopleRelation: false,
      eventManagement: false,
      contentWriting: false
    },
    valueAddition: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleAddressChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, address: e.target.value})
  }
  
  const handleValueAdditionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, valueAddition: e.target.value})
  }
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, gender: e.target.value})
  }
  
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      interests: {
        ...formData.interests,
        [e.target.name]: e.target.checked,
      }
    })
  }

  const sendDataToSheet = async () => {
    const API_URL = 'https://api.jsonbin.io/v3/b/67aaf7baad19ca34f8ff2ce4';
    const API_KEY = '$2a$10$mWixbqv40vfGKspacLjHqeCY2FpiY0YaA.RNRqXSbp0usFC.a8jpO';
    try {
      const response = await axios.get(API_URL, {
        headers: {
          'X-Master-Key': API_KEY // Use your API key
        }
      });
      // console.log('Success:', response.data);
      let existingData = response.data.record || []; // If it's an array, keep it as an array
      if (!Array.isArray(existingData)) {
        existingData = existingData ? [existingData] : []; // Convert object to array if needed
      }
      const newData = [...existingData, formData];
      await axios.put(API_URL, newData, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY
        }
      });
      // console.log('Data appended successfully!');
      //window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendDataToSheet().then((data) => {
      alert("Thank you for reaching out to us!")
      window.location.reload()
    })
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={`${styles['outer-wrapper']} d-none d-lg-block`}>
        <div className={styles['header']}>
          <Image src={'/logo.svg'} alt={'Logo'} height={100} width={200} />
          <h3>Become a part of our Agresar family</h3>
        </div>
        <div className={styles['content']}>
          <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
              <div className={styles['form-item']}>
                <label htmlFor="name"><b><u>Name</u></b></label>
                <input type="text" name='name' required onChange={handleChange} id="name" />
              </div>
              <div className={styles['form-item']}>
                <label htmlFor="email"><b><u>Email</u></b></label>
                <input type="email" name='email' required onChange={handleChange} id="email" />
              </div>
              <div className={styles['form-item']}>
                <label htmlFor="phone"><b><u>Phone</u></b></label>
                <input type="tel" name='phone' required pattern='[0-9]{10}' onChange={handleChange} id="phone" />
              </div>

              <div className={styles['form-item']}>
                <label htmlFor="dob"><b><u>Date of birth</u></b></label>
                <input type="date" name='dob' required onChange={handleChange} id="dob" />
              </div>

              <div className={styles['form-item']}>
                <label htmlFor="address"><b><u>Address</u></b></label>
                <textarea name='address' required onChange={handleAddressChange} id="address" />
              </div>

              <div className={styles['form-item']}>
                <label htmlFor="city"><b><u>Gender</u></b></label>
                {/* <div className={styles['genders']}>
                  {['/male.svg', '/female.svg', '/nonBinary.svg'].map(
                    (item, index) => (
                      <div key={index}>
                        <Image src={item} alt={'Logo'} height={64} width={64} />
                      </div>
                    )
                  )}
                </div> */}
                <label className={styles['radioBtn']}>
                  <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} />
                  Female
                </label>
                <label>
                  <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleGenderChange} />
                  Other
                </label>
              </div>

              <div className={styles['form-item']}>
                <label><b><u>Interests</u></b></label>
                {/* <div className={styles['interests']}>
                  {[
                    'Teaching',
                    'Sports',
                    'People Relation',
                    'Event Managemenr',
                    'Content Writing',
                  ].map((item, index) => (
                    <div key={index} className={styles['interest-item']}>
                      <input type="checkbox" id={item} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div> */}
                <fieldset>
                  <label>
                    <input type="checkbox" name="teaching" checked={formData.interests.teaching} onChange={handleCheckboxChange} />
                    Teaching
                  </label>
                  <label>
                    <input type="checkbox" name="sports" checked={formData.interests.sports} onChange={handleCheckboxChange} />
                    Sports
                  </label>
                  <label>
                    <input type="checkbox" name="peopleRelation" checked={formData.interests.peopleRelation} onChange={handleCheckboxChange} />
                    People Relation
                  </label>
                  <label>
                    <input type="checkbox" name="eventManagement" checked={formData.interests.eventManagement} onChange={handleCheckboxChange} />
                    Event Management
                  </label>
                  <label>
                    <input type="checkbox" name="contentWriting" checked={formData.interests.contentWriting} onChange={handleCheckboxChange} />
                    Content Writing
                  </label>
                </fieldset>
              </div>

              <div className={styles['form-item']}>
                <label htmlFor="voc"><b><u>Value Addition</u></b></label>
                <textarea name='valueAddition' required onChange={handleValueAdditionChange} id="voc" />
              </div>

              <div className={styles['form-item']}>
                <Button
                  text="Submit & Join"
                  onClick={() => {}}
                  type="primary"
                  width="194px"
                  height="48px"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Container>
        <div className={`${styles['outer-wrapper-sm']} d-lock d-lg-none d-flex align-items-center justify-content-center sm`}>
          {/* <div className={styles['header']}>
            <Image src={'/logo.svg'} alt={'Logo'} height={100} width={200} />
            <h3>Become a part of our Agresar family</h3>
          </div> */}
          <div className={styles['content-sm']}>
            <div className={styles['form-container-sm']} style={{padding: 20, marginLeft: 10}}>
              <form onSubmit={handleSubmit}>
                <div className={styles['form-item']}>
                  <label htmlFor="name" style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}><b><u>Name</u></b></label>
                  <input type="text" name='name' required onChange={handleChange} id="name" />
                </div>
                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="email"><b><u>Email</u></b></label>
                  <input type="email" name='email' required onChange={handleChange} id="email" />
                </div>
                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="phone"><b><u>Phone</u></b></label>
                  <input type="tel" name='phone' required pattern='[0-9]{10}' onChange={handleChange} id="phone" />
                </div>

                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="dob"><b><u>Date of birth</u></b></label>
                  <input type="date" name='dob' required onChange={handleChange} id="dob" />
                </div>

                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="address"><b><u>Address</u></b></label>
                  <textarea name='address' required onChange={handleAddressChange} id="address" />
                </div>

                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="city"><b><u>Gender</u></b></label>
                  {/* <div className={styles['genders']}>
                    {['/male.svg', '/female.svg', '/nonBinary.svg'].map(
                      (item, index) => (
                        <div key={index}>
                          <Image src={item} alt={'Logo'} height={64} width={64} />
                        </div>
                      )
                    )}
                  </div> */}
                  <label className={styles['radioBtn']} style={{display: 'block'}}>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} />
                    Male
                  </label>
                  <label style={{display: 'block'}}>
                    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} />
                    Female
                  </label>
                  <label style={{display: 'block'}}>
                    <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleGenderChange} />
                    Other
                  </label>
                </div>

                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}><b><u>Interests</u></b></label>
                  {/* <div className={styles['interests']}>
                    {[
                      'Teaching',
                      'Sports',
                      'People Relation',
                      'Event Managemenr',
                      'Content Writing',
                    ].map((item, index) => (
                      <div key={index} className={styles['interest-item']}>
                        <input type="checkbox" id={item} />
                        <label htmlFor={item}>{item}</label>
                      </div>
                    ))}
                  </div> */}
                  <fieldset>
                    <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}>
                      <input type="checkbox" name="teaching" checked={formData.interests.teaching} onChange={handleCheckboxChange} />
                      Teaching
                    </label>
                    <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}>
                      <input type="checkbox" name="sports" checked={formData.interests.sports} onChange={handleCheckboxChange} />
                      Sports
                    </label>
                    <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}>
                      <input type="checkbox" name="peopleRelation" checked={formData.interests.peopleRelation} onChange={handleCheckboxChange} />
                      People Relation
                    </label>
                    <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}>
                      <input type="checkbox" name="eventManagement" checked={formData.interests.eventManagement} onChange={handleCheckboxChange} />
                      Event Management
                    </label>
                    <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}}>
                      <input type="checkbox" name="contentWriting" checked={formData.interests.contentWriting} onChange={handleCheckboxChange} />
                      Content Writing
                    </label>
                  </fieldset>
                </div>

                <div className={styles['form-item']}>
                  <label style={{fontFamily: 'Axiforma Regular', fontSize: 15, marginTop: 20}} htmlFor="voc"><b><u>Value Addition</u></b></label>
                  <textarea name='valueAddition' required onChange={handleValueAdditionChange} id="voc" />
                </div>

                <div className={styles['form-item']} style={{marginTop: 20}}>
                  <Button
                    text="Submit & Join"
                    onClick={() => {}}
                    type="primary"
                    width="194px"
                    height="48px"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  )
}

export default Index
