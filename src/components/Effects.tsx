import React, { useState, useEffect } from 'react';

interface Props {
  tag: keyof JSX.IntrinsicElements;
  text: string;
  delay?: number; // optional delay in milliseconds
}

const TypingEffect: React.FC<Props> = ({ tag, text, delay = 80 }) => {
  const Tag = tag;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [renderedText, setRenderedText] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex < text.length) {
        setRenderedText(renderedText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    }, delay); // adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [currentIndex, renderedText, text, delay]);

  return (
    <Tag>
      {renderedText}  
      {currentIndex < text.length && <span>|</span>}
    </Tag>
  );
};

export default TypingEffect;