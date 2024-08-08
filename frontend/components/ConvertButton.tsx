import React from 'react';

interface ConvertButtonProps {
  onChange: () => void;
}

const ConvertButton = ({ onChange }: ConvertButtonProps) => {
  return (
    <button onClick={onChange} className="bg-black p-4 px-8 text-white">
      Convert
    </button>
  );
};

export default ConvertButton;
