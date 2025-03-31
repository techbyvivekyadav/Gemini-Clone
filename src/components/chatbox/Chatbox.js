import React from 'react'
import { assets } from '../../assets/assets'
import './Chatbox.css'

const Chatbox = (props) => {
  return (
    <div className='chat-box'>
      {
        props.data.map((item) => {
          return (
            <div key={item.sno}>
              <div className='user-chat1'>
                <div div className='user-chat' >
                  <p>{item.promt}</p>
                  <img className='pic' src={assets.pic} alt='' />
                </div>
              </div>
              <div className='top1'>
                <img src={assets.logo} alt='' />
                <div className='hover'>
                  <img src={assets.voice} alt='' />
                </div>
              </div>
              <div className='gemini-chat1'>

                <div className='gemini-chat'>
                  {(item.isReady) ?
                    <>
                      <span><p>{item.reply}</p></span>
                      <div className='bottom1'>
                        <div className='hover'>
                          <img src={assets.share} alt='' />
                        </div>
                        <div className='hover'>
                          <img src={assets.copy} alt='' />
                        </div>
                      </div>
                    </>
                    :
                    <div className='loader'>
                      <hr />
                      <hr />
                    </div>
                  }
                </div>
              </div>
            </div>)
        })
      }
    </div>
  )
}

export default Chatbox