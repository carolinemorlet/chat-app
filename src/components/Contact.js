import React from 'react';
import './Contact.css';

function Contact() {
  const online = true;

  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/17.jpg"
        alt="fiche-contact"
      />
      <div className="status">
        <p className="name">Diane PERRY</p>
        <span className={online ? 'status-online' : 'status-offline'}></span>
        <p className="status-text">{online ? 'online' : 'offline'}</p>
      </div>
    </div>
  );
}

export default Contact;
