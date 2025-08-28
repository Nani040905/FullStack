import React from "react";
import { useState } from "react";
import "./App.css";

 function App(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    bio:"",
    agreeToTerms:false
  });

  const [errors, setErrors] = useState({});

  const validateEmail=(email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleInputChange=(event)=>{
    const {name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
    if (name==="name"){
      if(formData.name.trim().length < 2) {
        setErrors(prevErrors => ({
          ...prevErrors,
          name: "Name must be at least 2 characters long"
        }));
      } else {
        setErrors(prevErrors => {
          const newErrors = { ...prevErrors };
          delete newErrors.name;
          return newErrors;
        });
      }
    }

    if (name==='email'){
      if (!validateEmail(value)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          email: "Please enter a valid email address"
        }));
      } else {
        setErrors(prevErrors => {
          const newErrors = { ...prevErrors };
          delete newErrors.email;
          return newErrors;
        });
      }
    }
  };


  const validateForm=()=>{
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.country) {
      newErrors.country = "Country is required";
    }
    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required";
    } else if (formData.bio.length > 500) {
      newErrors.bio = "Bio is too long";
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit=(event)=>{
  event.preventDefault();
  const isValid = validateForm();
  if (!isValid) {
    return; // stop submission if invalid
  }
  setErrors({});
  console.log("Form Submitted:", formData);
};

  const resetForm=()=>{
    setFormData({
      name: "",
      email: "",
      country: "",
      bio:"",
      agreeToTerms:false
    });
    setErrors({});
  }
  return(
    <div className="App">
    <h1>Personal Information</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text" 
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
        {errors.country && <span className="error-message">{errors.country}</span>}
      </div>
      <div>
        <label htmlFor="bio">Tell us about yourself:</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          rows={4}
          placeholder="Share a brief bio about yourself"
        />
        <small className={`Character-count ${formData.bio.length > 450 ? "error" : ""}`}>
          {formData.bio.length}/200
        </small>
      </div>
      <div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={(e) =>
              setFormData(prevFormData => ({
                ...prevFormData,
                agreeToTerms: e.target.checked
              }))
            }
          />
          I agree to the terms and conditions
        </label>
        {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
      </div>
      <button type="submit">Submit Form</button>
      <button type="button" onClick={resetForm}>Reset Form</button>
    </form>
    </div>
  );
 }
 export default App;