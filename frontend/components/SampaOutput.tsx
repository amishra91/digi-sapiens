import React from 'react';

interface SampaOutputProps {
  sampaText: string;
}

const SampaOutput = ({ sampaText }: SampaOutputProps) => {
  return (
    <textarea
      rows={6}
      placeholder="SAMPA output"
      value={sampaText}
      readOnly
      className="w-full mt-2 mb-2 p-2"
    />
  );
};

export default SampaOutput;
