// @ts-nocheck
import styles from './one.module.scss'
import { content } from '../../../../constants/content'
import Image from 'next/image'
import Button from '../../../atoms/button'
import { useState } from 'react'
import dbName from './../../../../public/database/database.json'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

 
// const saveData = (data,file) => {
//    const finished = (error) => {
//      if(error){
//        console.error(error)
//        return;
//      }
//    }
//    const jsonData = JSON.stringify(data,null,2)
//    fs.writeFile(file,jsonData,finished)
//  }

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const openDb = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('contacts', 1);
  
      // Handle database upgrades (for version changes)
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('contacts')) {
          db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
        }
      };
  
      // Handle success
      request.onsuccess = (e) => {
        resolve(e.target.result); // Database object
      };
  
      // Handle errors
      request.onerror = (e) => {
        reject(e.target.error);
      };
    });
  };

  // Add data to the database
  // const saveToDb = async (data) => {
  //   const db = await openDb();
  //   const transaction = db.transaction('contacts', 'readwrite');
  //   const store = transaction.objectStore('contacts');
  //   store.add(data);

  //   transaction.oncomplete = () => {
  //     console.log('Data saved to IndexedDB');
  //     alert('Thank you reaching out to us!')
  //   };

  //   transaction.onerror = (e) => {
  //     console.error('Error saving data:', e.target.error);
  //   };
  // };

  // Retrieve data from IndexedDB
  // const getFromDb = async () => {
  //   const db = await openDb();
  //   const transaction = db.transaction('contacts', 'readonly');
  //   const store = transaction.objectStore('contacts');
  //   const request = store.getAll(); // Get all records

  //   return new Promise((resolve, reject) => {
  //     request.onsuccess = () => {
  //       resolve(request.result);
  //     };
  //     request.onerror = (e) => {
  //       reject(e.target.error);
  //     };
  //   });
  // };
  
  const sendDataToSheet = async () => {
    const API_URL = 'https://api.jsonbin.io/v3/b/67a46825acd3cb34a8d930d9';
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
      Swal.fire({
        title: "Success!",
        text: "Thank you for reaching out to us!",
        icon: "success",
        confirmButtonText: "OK"
      });
      setFormData({"name": '', "email": '', "phone": '', "message": ''})
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    //saveToDb(formData)
    sendDataToSheet().then((data) => {
      // console.log(data)
    })
  }
  return (
    <>
    <Container>
      <section className={styles['outer-wrapper']}>
        <div className={styles['inner-wrapper']}>
          <Image
            src={content?.contact?.one?.section1?.img?.src}
            alt={content?.contact?.one?.section1?.img?.alt}
            height={content?.contact?.one?.section1?.img?.height}
            width={content?.contact?.one?.section1?.img?.width}
          />
          <h2>{content?.contact?.one?.section1?.h2}</h2>
        </div>
      </section>
      <Row>
      <section className={`${styles['outer-wrapper-2']} d-block`}>
        <div className={`${styles['inner-wrapper']} d-block`}>
          <div className={`${styles['form-container']} d-block`}>
            <h3>Let’s begin with a conversation.</h3>
            <form
              onSubmit={handleSubmit}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [e.target.id]: e.target.value,
                })
              }}
            >
              <div className={styles['form-item']}>
                <label htmlFor="name">Name</label>
                <input type="text" required id="name" value={formData.name} />
              </div>
              <div className={styles['form-item']}>
                <label htmlFor="email">Email</label>
                <input type="email" required id="email" value={formData.email} />
              </div>
              <div className={styles['form-item']}>
                <label htmlFor="phone">Phone</label>
                <div>
                  <span>+91</span>
                  <input type="tel" 
                  required 
                  pattern='[0-9]{10}'
                  id="phone"
                  onInvalid={(e) => e.target.setCustomValidity("Phone number is required, 10 digits required")}
                  onInput={(e) => e.target.setCustomValidity("")}
                  value={formData.phone} />
                </div>
              </div>
              <div className={styles['form-item']}>
                <label htmlFor="message">Message</label>
                <textarea id="message" value={formData.message} />
              </div>
              <div className={styles['form-item']}>
                <Button
                  text="Submit"
                  onClick={() => {}}
                  type="primary"
                  width="170px"
                  height="48px"
                />
              </div>
            </form>
          </div>
          <div className={styles['contact-container']}>
            {content?.contact?.one?.section2?.contacts?.map((item, index) => (
              <div className={styles['contact-item']} key={index}>
                <Image
                  src={item?.icon?.src}
                  alt={item?.icon?.alt}
                  height={item?.icon?.height}
                  width={item?.icon?.width}
                />
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Row>
    </Container>
    </>
  )
}

export default Index
