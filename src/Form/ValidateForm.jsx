import React, { useState } from "react";
import { useForm } from "react-hook-form"; // using react-hook-form library for form validation
import InputField from "./InputField";

const ValidateForm = () => {
  const { register, handleSubmit, errors } = useForm(); // using useForm hook
  const [submittedData, setSubmittedData] = useState(null); // state for storing the submitted data

  // a function to handle the form submission
  const onSubmit = (data) => {
    console.log(data);
    setSubmittedData(data);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">
        Form Validation Example
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          register={register}
          required={true}
          errors={errors}
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          register={register}
          required={true}
          errors={errors}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          required={true}
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i} // a regex pattern for email validation
          errors={errors}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          required={true}
          pattern={/.{8,}/} // a regex pattern for password validation (at least 8 characters)
          errors={errors}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {/* {submittedData && ( // displaying the submitted data if any
        <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-bold text-center my-4">
            Submitted Data
          </h2>
          <pre className="text-sm text-gray-700">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )} */}
    </div>
  );
};

export default ValidateForm;
