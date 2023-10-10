import React, { useState } from 'react';
import './App.css';
import Logo from './assets/mentorSchoolLogo.jpg';
import unn from './assets/recep.jpg';
import check from './assets/check-mark.png';
import tele from './assets/telegram.png';

const App = () => {

  const [result, setResult] = useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    number: "+998",
    text: "",
    sinif: "",
    email: "",
    time: ""
  });



  const sendMsgToBot = async (e) => {
    let Info = `👤<b> O'quvchi ro'yxatdan o'tdi</b>%0A%0A <b>Ismi</b>: ${formData.fullname}%0A%0A ☎️ Tel: ${formData.number}%0A 🔢 Sinfi: ${formData.sinif}%0A 📌 Kursi: ${formData.text}%0A`

    let tokenBot = "6230509348:AAHqIOcv8e6rUeikjKdc27-H1rMw1oLux0k"; // Azimjon
    let chatId = "39464759"; // Azimjon

    let tempUrl = `https://api.telegram.org/bot${tokenBot}/sendMessage?chat_id=${chatId}&text=${Info}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", tempUrl, true);
    api.send();

    setTimeout(() => {
      setResult(true)
    }, 3000)
    setTimeout(() => {
      setResult(false)
    }, 11000)

    setFormData({
      fullname: "",
      number: "+998",
      text: "",
      sinif: "",
      email: "",
      tim: ""
    });
  };

  const Clear = () => {
    window.location.reload(false)
  }


  return (
    <form className='Container' >

      <div className="imgBox">
        <img src={Logo} alt="" />
      </div>

      <div className="box none">
        <p>Ism-familiyangiz <p className='red'>*</p> </p>
        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }

            className='name'
            placeholder='Мой ответ'
            required
            minLength={4}
            style={{
              borderBottom: formData.fullname.length >= 4 && "2px solid green",
            }}
          />

          {formData.fullname.length >= 4 ? (
            // <BsCheckCircle style={{ color: "green" }} />
            <img src={check} alt='' />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}


        </div>

        <br />
        <br />
        <p>Telefon raqamingiz <p className='red'>*</p> </p>

        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }

            className='name'
            placeholder='Мой ответ'
            required
            minLength={4}
            style={{
              borderBottom: formData.number.length >= 13 && "2px solid green",
            }}
          />

          {formData.number.length >= 13 ? (
            // <BsCheckCircle style={{ color: "green" }} />
            <img src={check} alt='' />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}


        </div>

        <br />
        <br />

        <p>Sinfi <p className='red'>*</p> </p>

        <div
          className="form_item"

        >
          <input
            type="text"
            value={formData.sinif}
            onChange={(e) =>
              setFormData({ ...formData, sinif: e.target.value })
            }

            className='name'
            placeholder='Мой ответ'
            required
            minLength={1}
            style={{
              borderBottom: formData.sinif.length >= 1 && "2px solid green",
            }}
          />

          {formData.sinif.length >= 1 ? (
            // <BsCheckCircle style={{ color: "green" }} />
            <img src={check} alt='' />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}


        </div>
      </div>

      <div className="box none">
        <p>Kursni tanlang <p className='red'>*</p></p>
        <div
          className="form_item"

        >
          <select onChange={(e) =>
            setFormData({ ...formData, text: e.target.value })
          }
            style={{
              borderBottom: formData.text.length >= 3 && "2px solid green",
            }} className='rewiew'>
            <option >Мой выбор</option>
            <option value="Ingiliz tili">Ingiliz tili (IELTS)</option>
            <option value="Rus tili">Rus tili</option>
            <option value="Ona tili Adabiyon">Ona tili va Adabiyon</option>
            <option value="Kimyo">Kimyo</option>
            <option value="Biologiya">Biologiya</option>
          </select>
          {formData.text.length >= 3 ? (
            // <BsCheckCircle style={{ color: "green" }} />
            <img src={check} alt='' />
          ) : (
            // <AiOutlineCloseCircle style={{ color: "red" }} />
            ""
          )}
        </div>
      </div>

      <div className="submit">
        {/* ${leading} */}
        {
          formData.number === 0 || formData.name === '' || formData.text === '' || formData.sinif === '' ?
            <button className="Otp">Отправить</button>
            :
            <button onClick={() => {
              sendMsgToBot()
            }} className="TelegramPlane">Отправить <img width={17} src={tele} alt="" /> </button>
        }
        <button onClick={() => Clear()} className='Ochi'>Очистить форму</button>
      </div>

      <div className="logo">
        <p>© Mentor school, 2023 All rights reserved.</p>
      </div>

      <div className={`cloud ${result ? 'cloudShow' : ""}`}>
        <img src={unn} alt="" />
        <p>Siz muvofaqiyatli roʻyhatdan oʻtdingiz. Tez orada operatorlarimiz siz bilan bogʻlanishadi😊</p>
      </div>
      {result ? <div onClick={() => setResult(false)} className="displayNone"></div> : ''}

    </form>

  )
}

export default App

