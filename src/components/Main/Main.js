import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './main.css'
import api from '../../config/api'
import Chatbox from '../chatbox/Chatbox'

const Main = () => {

  let newData = {

  }

  const [allData, setAllData] = useState([]);
  const [isWrite, setIsWrite] = useState(false);

  const [search, setSearch] = useState('');

  const getData = async (promt) => {
    let reply = await api(promt);
    setIsWrite(false)
    newData.isReady = true;
    setAllData([...allData, newData])
    for (let i = 0; i < reply.length; i++) {
      setTimeout(() => {
        newData.reply = newData.reply + reply[i];
        setAllData([...allData, newData])
        console.log(allData);
      }, 40 * i);
    }
  }


  const runChat = () => {
    if (search == "") {
      alert("Enter something");
    } else {
      setIsWrite(true);
      const promt = search;
      newData.promt = promt;
      newData.isReady = false;
      newData.reply = "";
      newData.sno = allData.length;
      setAllData([...allData, newData])
      getData(promt);
      console.log(allData);
    }
  }

  return (
    <div className='main'>
      <div className='navbar'>
        <p>Gemini</p>
        <img className='pic' src={assets.pic} alt='' />
      </div>
      <div className='main-container'>
        <div className='new23'>
          {(allData.length <= 0) ?
            <div className='main-text'>
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div> :
            <Chatbox data={allData} />
          }
        </div>
        <div className='main-bottom'>
          <div className='searchbar'>
            <input type='text' onChange={(e) => { setSearch(e.target.value) }} value={search} placeholder='Ask Me' />
            <div className='serach-icon'>
              <img src={assets.gallary} alt='' />
              <img src={assets.mic} alt='' />
              {(search != "") ?
              <>
              {
                (isWrite) ? null :
                <div onClick={runChat} className='send-icon'>
                  <img src={assets.send} alt='' />
                </div>
              }
              </>
               : null}
            </div>
          </div>
          <p className='info'>Google Terms and the Google Privacy Policy apply. Gemini can make mistakes, so double-check it.</p>
        </div>
      </div>
    </div>
  )
}

export default Main