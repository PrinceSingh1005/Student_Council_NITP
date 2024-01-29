import React, { useEffect, useRef, useState } from 'react'
import PasswordError from './PasswordError'

const FormValidate = () => {
  const [inputForm, setInputForm]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    })
  }

  const [isInputFocused, setIsInputFocused] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        // Attach an event listener to the document to handle clicks outside the input field
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsInputFocused(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };


    function submitHandler(event){
      event.preventDefault();
      console.log("Form data:");
      console.log(inputForm);
    }
  return (
    <div className='flex justify-center items-center py-10'>
      <form onSubmit={submitHandler} className='w-[450px] p-4 rounded-md flex flex-col mx-auto bg-white shadow-2xl'>
      <h1 className='my-5 mx-auto text-2xl font-serif font-bold'>Sign Up</h1>
        <div className='flex gap-2'>
          <input className='p-2 w-[205px] my-1 rounded-lg font-medium drop-shadow-md focus:outline-none' type='text' name='firstname' onChange={handleChange} placeholder='First name' />
          <input className='p-2 focus:outline-none w-[205px] my-1 rounded-lg font-medium shadow-md' type='text' name='lastname' onChange={handleChange} placeholder='Last name' />
        </div>
        <input className='p-2 focus:outline-none drop-shadow-md my-1 rounded-lg font-medium' type='text' name='email' pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i} onChange={handleChange} placeholder='Email address' autoComplete='none' />
        <input className='p-2 focus:outline-none drop-shadow-md my-1 rounded-lg font-medium' type='password' name='password' placeholder='Password' autoComplete='none' onFocus={handleInputFocus} ref={inputRef} onChange={handleChange} />
        <PasswordError pass={inputForm.password} isInputFocus={isInputFocused} />
        <select className='p-2 focus:outline-none drop-shadow-md rounded-lg my-1 cursor-pointer'>
          <option defaultValue={"Select"}>Choose Your Country</option>
          <option value='US'>United State</option>
          <option value='Uk'>United Kingdom</option>
          <option value='In'>India</option>
          <option value='Ca'>Canada</option>
          <option value='FR'>France</option>
          <option value='SW'>SwitzerLand</option>
        </select>
        <p>Date of birth</p>
        <div className='gap-4 flex'>
          <input className='focus:outline-none drop-shadow-md p-2 my-1 rounded-lg font-medium w-full' type="number" id="month" name="month" placeholder="Month" min="1" max="12" />
          <input className='focus:outline-none drop-shadow-md p-2 my-1 rounded-lg font-medium w-full' type="number" id="day" name="day" placeholder="Date" min="1" max="31" />
          <input className='focus:outline-none drop-shadow-md p-2 my-1 rounded-lg font-medium w-full' type="number" id="year" name="year" placeholder="Year" min="1900" max="2023" />

        </div>
        <p className='text-xs my-2 font-medium text-gray-500'>By signing up for a free Creative Cloud account, you agree Prince can keep you informed via email about products and services.
          To opt-out in the future, click the unsubscribe link in any marketing email you receive from us. <span className='text-sky-500 cursor-pointer'>Learn more.</span></p>
        <div className='flex gap-2 my-3'>
          <input className='cursor-pointer' type='checkbox' />
          <p className='text-xs font-medium text-gray-500'>I have read and agree to the <span className='text-sky-500 cursor-pointer'>Terms of Use</span> and <span className='text-sky-500 cursor-pointer'>Privacy Policy.</span></p>
        </div>
        <button
          className="bg-blue-500 w-full my-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none drop-shadow-md"
          type="submit"
        >
          Sign Up
        </button>
        <p className='w-fit mx-auto my-4 text-xs font-medium text-gray-500'>Already have an Account? <span className='text-sky-500 cursor-pointer'>Sign in</span></p>
      </form>
    </div>
  )
}

export default FormValidate