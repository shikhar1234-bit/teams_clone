import React from 'react'
import './ContactCard.css'
function ContactCard({item}) {
    return (
        <div className='contact-card'>
        <div className='contact-top'>
            <img src={item.avatar} className='contact-avatar'/>
            <div className='contact-info'>
                <label className='contact-title'>{item.name}</label>
                <label className='contact-subtitle'>{item.type}</label>
            </div>
        </div>
        <div className='contact-icons'>
            <div className='contact-icon'>
            <i class="fas fa-microphone-alt"></i>
            </div>
            <div className='contact-icon'>
            <i class="fas fa-video"></i>
            </div>
            <div className='contact-icon'>
            <i class="fas fa-bars"></i>
            </div>

        </div>
            
        </div>
    )
}

export default ContactCard
