import React, { useState } from 'react';

const MessageSection = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSentMessage('');

    setNameError(validateLength(name));
    setEmailError(!validateEmail(email));
    setMessageError(validateMessageLength(message));

    if (nameError || emailError || messageError) {
      setErrorMessage('Please fill out all the required fields correctly.');
      return;
    }

    const user = { name, email, message };
    const json = JSON.stringify(user);

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: json
    });

    switch (result.status) {
      case 200:
        clearForm();
        setSentMessage('The message has been sent.');
        break;
      case 400:
        setErrorMessage('Please fill out all the required fields.');
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        setNameError(false);
        break;
      case 'email':
        setEmail(e.target.value);
        setEmailError(false);
        break;
      case 'message':
        setMessage(e.target.value);
        setMessageError(false);
        break;
      default:
        break;
    }
  };

  const validateLength = (value) => {
    return value.length === 0;
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.length >= 5;
  };

  const validateMessageLength = (message) => {
    return message.length < 10;
  };

  return (
    <div className="leave-message-information">
      <div className="container">
        <div className="background-section">
          <div className="leave-message-headline">
            <h2>Leave us a message<br /> for any information.</h2>
          </div>
          <div className="search-container">
            <form onSubmit={handleSubmit} noValidate>
              <p className="sentMessage">{sentMessage}</p>
              <p className="errorMessage">{errorMessage}</p>
              
              <label className={nameError ? 'error' : 'hidden'}>
                {nameError && name.length === 0 ? 'Name must be entered' : ''}
                {nameError && name.length === 1 ? 'Name must be at least two letters' : ''}
              </label>
              <input
                type="text"
                id="search-input-name"
                name="name"
                placeholder="Name*"
                value={name}
                onChange={(e) => handleChange(e)}
                className={nameError ? 'error-border' : ''}
              />
              <label className={emailError ? 'error' : 'hidden'}>
                {emailError && email.length === 0 ? 'Email must be entered' : (emailError && !email.includes('@') ? 'Invalid email' : '')}
              </label>
              <input
                type="text"
                id="search-input-email"
                name="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => handleChange(e)}
                className={emailError ? 'error-border' : ''}
              />
              <label className={messageError ? 'error' : 'hidden'}>
                {messageError && message.length < 10 ? 'The message has to be at least 10 characters' : ''}
              </label>
              <input
                type="text"
                id="search-input-message"
                name="message"
                placeholder="Your Message*"
                value={message}
                onChange={(e) => handleChange(e)}
                className={messageError ? 'error-border' : ''}
              />
              <a className="btn-yellow" href="Subscribe.html" onClick={handleSubmit}>
                Send Message <i className="fa-regular fa-arrow-up-right"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;