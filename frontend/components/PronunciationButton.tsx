import React from 'react';

interface PronunciationButtonProps {
  ipaText: string;
}

const PronunciationButton = ({ ipaText }: PronunciationButtonProps) => {
  const playPronunciation = (): void => {
    const utterance = new SpeechSynthesisUtterance(ipaText);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={playPronunciation}
      className="bg-black p-4 px-8 text-white"
    >
      Play Pronunciation
    </button>
  );
};

export default PronunciationButton;
