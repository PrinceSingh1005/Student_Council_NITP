import React, { useState } from 'react';

const ValidForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Validate username
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Check if there are no errors
    const isValid = Object.keys(newErrors).length === 0;

    setErrors(newErrors);
    setIsFormValid(isValid);

    console.log("new error:", newErrors);
    console.log("is form valid", isValid);
    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validateForm()) {
      // Submit the form data
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className='w-fit mx-auto py-20'>
      <form className='p-6 rounded flex flex-col mx-auto bg-white border' method='post' onSubmit={handleSubmit}>
        <h1 className='mx-auto my-4 text-3xl font-serif'>Login Page</h1>
        {/* <div className='flex flex-col'>
          <input className='border p-2 my-1 rounded border-gray-400' placeholder='User name'
            type="text"
            id="username"
            name="username"
            value={formData.username}
            autoComplete='none'
            onChange={handleChange}
          />
          {errors.username && <p className="error text-red-500 text-xs">*{errors.username}</p>}
        </div> */}

        <div className='flex flex-col'>
          <input className='border p-2 my-1 rounded border-gray-400' placeholder='Email'
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error text-red-500 text-xs">*{errors.email}</p>}
        </div>

        <div className='flex flex-col'>
          <input className='border p-2 my-1 rounded border-gray-400' placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error text-red-500 text-xs">*{errors.password}</p>}
        </div>
        <div className='pb-5 border-b outline-none border-black relative'>
        <button className="bg-blue-500 w-full my-2 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit" disabled={isFormValid}>
          Log in
        </button>
        <p className='absolute top-16 bg-white left-20 px-3'>OR</p>
        </div>
        <p>Don't have an account?<a>Register</a></p>
      </form >
    </div >
  )
}

export default ValidForm;
