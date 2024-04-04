import React from 'react';

interface RadioProps {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ options, selectedValue, onChange }) => {
  const handleChange = (value: string) => {
    if (value !== selectedValue) {
      onChange(value);
    } else {
      // Deselect if the same option is selected again
      onChange('');
    }
  };

  return (
    <div className="flex flex-col">
      {options.map(option => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-indigo-600"
            value={option.value}
            checked={option.value === selectedValue}
            onChange={() => handleChange(option.value)}
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
