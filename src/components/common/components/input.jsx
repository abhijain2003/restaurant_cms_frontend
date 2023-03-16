import React from "react";

const InputComponent = ({ label, value, setValue, name }) => {
  return (
    <div>
      <label
        for="input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
      type={name==="password" ? 'password' : name === 'price' ? 'number' : 'text'}
        value={value}
        name={name}
        onChange={setValue}
        id="input"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={label}
      />
    </div>
  );
};

export default InputComponent;
