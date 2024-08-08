'use client';

import { useState, useEffect } from 'react';
import TextArea from '@/components/TextArea';
import PronunciationButton from '@/components/PronunciationButton';
import SampaOutput from '@/components/SampaOutput';
import ConvertButton from '@/components/ConvertButton';

export default function Home() {
  const [ipaText, setIpaText] = useState<string>('');
  const [sampaText, setSampaText] = useState<string>('');

  const convertIpaToSampa = async () => {
    try {
      if (ipaText.length > 0) {
        const response = await fetch('/api/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ipaText),
        });

        const data = await response.json();
        setSampaText(data.data.sampa);
      }
    } catch (error) {
      console.error('Error converting IPA to SAMPA:', error);
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <h1>IPA to SAMPA Converter</h1>
      <TextArea
        value={ipaText}
        onChange={setIpaText}
        placeholder="Enter IPA text (one per line)"
      />
      <ConvertButton onChange={convertIpaToSampa} />
      <SampaOutput sampaText={sampaText} />
      <PronunciationButton ipaText={sampaText} />
    </div>
  );
}
