import { useState } from 'react';
import './App.css';

function App() {
  const [formData ,setFormData] = useState({
    name: "",
    email: "",
    country: "",
    bio: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) =>{
    const {name ,value} =event.target;
    setFormData(prevFormData =>({
      ...prevFormData,
      [name]: value
    }));
    if (name==="name"){
      if(formData.name.trim().length < 2) {
        setErrors(prevErrors => ({
          ...prevErrors,
          name: "Name must be at least 2 characters long"
        }));
        } else {
          setErrors(prevErrors => ({
          ...prevErrors,
          name: ""
        }));
      }
    }
    if (name === 'email'){

      const emailreg =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if(!emailreg.test(formData.email)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          email: "Please enter a valid email address"
        }));
        } else {
          setErrors(prevErrors => ({
          ...prevErrors,
          email: ""
        }));
      }
    }
    if (name === 'bio'){
      if (formData.bio.length > 400){
        setErrors(prevErrors => ({
          ...prevErrors,
          bio: "Bio must be 400 characters or less"
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          bio: ""
        }));
      }
    }
  }

  const validateForm = ()=>{
    const newErrors = {};
    if (!formData.name.trim()){
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()){
      newErrors.email = "Email is required";
    }
    if (!formData.country.trim()){
      newErrors.country = "Country is required";
    }
    if (!formData.bio.trim()){
      newErrors.bio = "Bio is required";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    const isValid=validateForm();
    if (!isValid){
      return;
    }
    setErrors({});
    console.log("Form Submitted:", formData);
  }

  const handleReset =() =>{
    setFormData({
      name: "",
      email: "",
      country: "",
      bio: "",
      agreeToTerms: false
    });
    setErrors({});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className='form-group'>
          <label htmlFor='name'> Name:</label>
          <input 
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='email'> Email:</label>
          <input 
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='country'> Country:</label>
          <select 
          id='country'
          name='country'
          value={formData.country}
          onChange={handleInputChange}
          >
            <option value="">select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='bio'> Personal info:</label>
          <textarea
          id='bio'
          name='bio'
          value={formData.bio}
          onChange={handleInputChange}
          rows={5}
          placeholder='Tell us about yourself'
          />
          <small>{formData.bio.length}/400</small>
          {errors.bio && <span className="error-message">{errors.bio}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='agreeToTerms' className='checkbox-label'>
            <input
            type='checkbox'
            id='agreeToTerms'
            name='agreeToTerms'
            onChange={handleInputChange}
            />
            I agree to the terms and conditions
          </label>
            {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
        </div>
        <div className='button-group'>
          <button type='submit' >Submit</button>
          <button type='button' onClick={handleReset}>Reset</button>
        </div>

      </form>
    </div>
  );
}

export default App;
