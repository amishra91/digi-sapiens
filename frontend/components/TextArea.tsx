import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextArea = ({ value, onChange, placeholder }: TextAreaProps) => {
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full mt-2 mb-2 p-2"
    />
  );
};

export default TextArea;
