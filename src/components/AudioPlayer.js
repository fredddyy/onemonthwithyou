import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto-play when component mounts (with user interaction fallback)
    const attemptAutoplay = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = volume;
          // Set audio to be muted initially to bypass autoplay restrictions
          audioRef.current.muted = true;
          await audioRef.current.play();
          setIsPlaying(true);
          // Unmute after successful play
          setTimeout(() => {
            if (audioRef.current && volume > 0) {
              audioRef.current.muted = false;
            }
          }, 100);
        }
      } catch (error) {
        console.log('Autoplay prevented, waiting for user interaction');
        // Autoplay was prevented, we'll need user interaction
      }
    };

    // Try to autoplay after a short delay
    const timer = setTimeout(attemptAutoplay, 500);
    
    // Also try on first user interaction
    const handleFirstInteraction = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          audioRef.current.volume = volume;
          audioRef.current.muted = false;
          await audioRef.current.play();
          setIsPlaying(true);
          document.removeEventListener('click', handleFirstInteraction);
          document.removeEventListener('keydown', handleFirstInteraction);
        } catch (error) {
          console.log('Play failed on interaction:', error);
        }
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          audioRef.current.muted = isMuted;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Play failed:', error);
        }
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        loop
        autoPlay
        muted
        src={process.env.PUBLIC_URL + "/background-music.mp3"}
      />
      <div className="audio-controls">
        <button 
          className="play-button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        
        <div className="volume-controls">
          <button 
            className="mute-button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <i className="fas fa-volume-mute"></i>
            ) : (
              <i className="fas fa-volume-up"></i>
            )}
          </button>
          
          <input
            type="range"
            className="volume-slider"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
        </div>
        
        <div className="music-indicator">
          <span className="music-note">♪</span>
          {isPlaying && <span className="playing-text show">Playing</span>}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;