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

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validateLength = (value, minLength) => {
    return value.length < minLength;
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.length >= 5;
  };

  const validateMessageLength = (message) => {
    return message.length < 10;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage('');
      setSentMessage('');

      console.log('Before validation', { name, email, message, nameError, emailError, messageError });

      setNameError(validateLength(name, 2));
      setEmailError(!validateEmail(email));
      setMessageError(validateMessageLength(message));

      console.log('After validation', { name, email, message, nameError, emailError, messageError });

      if (nameError || emailError || messageError) {
        setErrorMessage('Please fill out all the required fields correctly.');
        return;
      }

      console.log('Before API call', { name, email, message });

      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log('After API call', result);

      switch (result.status) {
        case 200:
          console.log('Form successfully submitted!');
          clearForm(); // Rensa formulärfälten här
          break;
        case 400:
          const errorResponse = await result.json();
          setErrorMessage(errorResponse.message);
          break;
        default:
          console.log('Unhandled status:', result.status);
          break;
      }
    } catch (error) {
      console.error('An error occurred while processing the form:', error);
      setErrorMessage('An error occurred while processing the form. Please try again.');
    }
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
              <button type="submit" className="btn-yellow">
                Send Message <i className="fa-regular fa-arrow-up-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;