import React from 'react';

const InputGroup = ({ label, value, onChange, type, placeholder, required, min }) => (
    <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">{label} {required && <span className="text-red-500">*</span>}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            min={min}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-[#4F46E5] focus:border-[#4F46E5] focus:outline-none"
        />
    </div>
);

export default InputGroup;
