import React from 'react'

const InputField = ({
    label,
    name,
    type,
    register,
    required,
    pattern,
    errors,
  }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          type={type}
          ref={register({ required, pattern })}
        />
        {errors[name] && errors[name].type === "required" && (
            <p className="text-red-500 text-xs italic mt-1">This field is required</p>
        )}
        {errors[name] && errors[name].type === "pattern" && (
            <p className="text-red-500 text-xs italic mt-1">Invalid input</p>
        )}
      </div>
    );
  };
  

export default InputField