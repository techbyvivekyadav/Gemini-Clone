import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    return (
        <div className='sidebar'>
            <div className='top'>
                <div className='menu'>
                    <img className='menu-icon' onClick={() => setExtended(prev => !prev)} src={assets.menu} alt='' />
                </div>
                <div className='mew-chat'>
                    <img src={assets.plus} alt='' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className='recent-entry'>
                        <img src={assets.chat} aria-label='' />
                        <p>What is react.....</p>
                    </div>
                </div> : null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.help} alt='' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.history} alt='' />
                    {extended ? <p>History</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={assets.settings} alt='' />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar