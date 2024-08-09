import React, { useRef, useEffect } from 'react';
import { Howl } from 'howler';

import musicFile from '../src/assets/Kids-Birthday-Happy-Birthday-English-Song.mp3'; // Replace with your audio file path

export default () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const sound = new Howl({ // Create a new Howl instance
      src: musicFile,
      html5: true,
    });

    audioRef.current = sound;

    return () => {
      sound.unload();
    };
  }, []);

  const handleMouseOver = () => {
    audioRef.current.play();
  };

  const handleMouseOut = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="birthdayCard" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Rehan & Reyan!</h3>
        <div className="balloons">
          <div className="balloonOne"></div>
          <div className="balloonTwo"></div>
          <div className="balloonThree"></div>
          <div className="balloonFour"></div>
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY REHAN & RIYAN</h3>
        <p>Dear Rehan & Riyan,</p>
        <p>
          Happy birthday!! I hope your day is filled with lots of love and
          laughter! May all of your birthday wishes come true.
        </p><br />
        <p className="name">Shaik Abdulgani</p>
        <p className="name1">Shaik Khajavali</p>
        <p className="name2">Shaik Faijunnisa</p>
      </div>
    </div>
  );
};
