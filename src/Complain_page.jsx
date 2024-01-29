import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import BackButton from './Back_button.jsx';


const MyForm = () => {

  
  const [selectedImage, setSelectedImage] = useState(null);

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };


  const [formData, setFormData] = useState({
    firstName: '',
    Rollno: '',
    email:'',
    Complain: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions on form submission
    console.log('Form submitted:', formData);
    // You can add more logic here, such as sending the form data to a server
  };

  

  

  return (
    
    <>
  
     
    
    <div className="boxed-form-container">
    <BackButton />
    <h1 className='heading'>Complain Form</h1>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
        //  value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Roll No.:
        <input
          type="text"
          name="firstName"
          //value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="Complain"
         // value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Complain:
        <textarea
        className='textarea'
          type="textarea"
          name="Complain"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    <div className="image-upload-container">
      <h2>Attach files of Complaint.</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      
      {selectedImage && (
        <div className="preview-container">
          <h3>Preview:</h3>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </div>
    </div>
    </>
  );
};

export default MyForm;
