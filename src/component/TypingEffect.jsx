import React from 'react';
import { useState,useEffect } from "react"

import { Cursor } from './Cursor';

export default function TypingEffect({ text, speed = 50, cursorWidth, onComplete, beginTyping }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const isActive = typeof beginTyping === 'undefined' ? true : beginTyping

    useEffect(() => {
      setDisplayedText('');
      setIndex(0);
    }, [text]);
  
    useEffect(() => {
      if (!isActive)  {
        return
      }
      if (isActive && index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prevText => prevText + text[index]);
          setIndex(prevIndex => {
            if (prevIndex + 1 === text.length) {
              onComplete?.()
            }
            return prevIndex + 1
          });
        }, speed);
  
        return () => clearTimeout(timer);
      }
    }, [index, text, speed, isActive]);

    if (!isActive) {
      return null
    }

  
      return (
        <span className="typing-effect">
          {displayedText}
          <Cursor width={cursorWidth}/>
        </span>
      );
  };