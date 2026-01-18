import React, { useState } from 'react';
import './LoveLetters.css';

const LoveLetters = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  
  const loveLetters = [
    {
      id: 1,
      title: "Open when… you first receive this",
      message: "Hi Baby,\n\nSurprise! I wanted to give you something that could be there for you even when I'm not physically by your side. Inside these envelopes, you'll find a piece of me. I hope these letters bring you comfort, joy, and remind you how much you mean to me.\n\nI love you more than words can express.",
      color: "#ff6b9d"
    },
    {
      id: 2,
      title: "Open when… I'm mad at you",
      message: "If you're reading this, things might feel a little heavy or tense between us right now. Maybe we're not speaking, or maybe we just had a really frustrating argument.\n\nI want you to know that even though I'm upset, I still love you more than anything. My anger is temporary, but my commitment to you is permanent. Sometimes I get overwhelmed or stubborn, but please don't doubt for a second that you are my person.\n\nI'm probably just cooling off, so please be patient with me. I don't want to be at odds with you; I want to be back in your arms. Let's take a deep breath, forget about 'winning' the fight, and just focus on getting back to us.\n\nI'm ready to make up whenever you are.",
      color: "#c44569"
    },
    {
      id: 3,
      title: "Open when… you're mad at me",
      message: "I know I can be frustrating sometimes, and I won't pretend I always get it right. If I've hurt you, misunderstood you, or made you feel unheard, I'm really sorry. Please remember that my intentions are never to push you away. Even in moments of tension, I care about you deeply and I'm willing to listen, learn, and make it right when you're ready.",
      color: "#f8b500"
    },
    {
      id: 4,
      title: "Open when… you feel alone",
      message: "If you're reading this, I want you to know you're not as alone as your thoughts might be telling you. You matter more than you realize, and your presence in my life is something I don't take lightly. Even when I'm not physically there, my heart is with you, holding space for you and cheering you on.",
      color: "#ff6b9d"
    },
    {
      id: 5,
      title: "Open when… you just need a mood boost",
      message: "This is your reminder that you're doing better than you think, even on days when it doesn't feel like it. You're intelligent, driven, and honestly very attractive inside and out. You have this amazing ability to light up any room you walk into, even when you don't realize it. You're stronger than you give yourself credit for, and I'm so proud to be by your side. Keep going - you've got this!",
      color: "#c44569"
    },
    {
      id: 6,
      title: "Open when… you miss me",
      message: "I miss you too, more than you know. Distance is hard, but our love is stronger. Remember all the good times we've shared and know that there are so many more to come. Every second apart makes the moments together even more precious. I'm thinking of you always.",
      color: "#f8b500"
    },
    {
      id: 7,
      title: "Open when… you can't sleep",
      message: "It's late and your mind is racing, isn't it? I wish I was there to hold you and whisper that everything will be okay. Close your eyes and imagine my arms around you. Remember that tomorrow is a new day with new possibilities. You're safe, you're loved, and you're going to get through whatever is keeping you awake. Sweet dreams, my love.",
      color: "#ff6b9d"
    },
    {
      id: 8,
      title: "Open when… you've had a bad day",
      message: "I'm so sorry you're going through this. Bad days happen to the best of us, and you deserve all the love and comfort in the world right now. Remember that this feeling is temporary, even though it feels overwhelming right now. You're resilient, you're capable, and you've overcome every challenge that's come your way so far. Let tomorrow be a fresh start. I'm here for you, always.",
      color: "#c44569"
    },
    {
      id: 9,
      title: "Open when… I'm stressing you too much",
      message: "I'm your babe, it's my job but then take a breath and remember that we're on the same team. Also send me money, I'm probably going through it right now.\n\nJust kidding about the money... mostly. But seriously, I know sometimes I can be a lot, and I want you to know I appreciate your patience. We're a team, and we'll figure things out together. You're my rock, and I'm lucky to have you.",
      color: "#f8b500"
    },
    {
      id: 10,
      title: "Open when… you have a win",
      message: "I hope you take a moment to really sit in this feeling and be proud of yourself. You worked for this, you earned it, and you deserve every bit of it. Seeing you win makes me genuinely happy, and I'm excited for all the bigger moments still waiting for you. This is only the beginning, and I'll be here cheering you on every step of the way. Celebrate this - you've earned it!",
      color: "#ff6b9d"
    },
    {
      id: 11,
      title: "Open when… you need to remember I love you",
      message: "Just in case you ever forget: I love you. I love you when you're happy and when you're sad. I love you when you're confident and when you're doubting yourself. I love your strengths and I love your imperfections. I love your past because it led you to me, and I love your future because I want to be in it. There is nothing you could ever do or say that would change how deeply I love you. You are my person, always and forever.",
      color: "#c44569"
    }
  ];

  const openLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const closeModal = () => {
    setSelectedLetter(null);
  };

  return (
    <section id="letters" className="love-letters">
      <div className="container">
        <h2 className="section-title">My Love Letters To You</h2>
        <p className="letters-intro">Each envelope holds a piece of my heart. Click on any envelope to read my love letters to you.</p>
        
        <div className="envelopes-grid">
          {loveLetters.map((letter) => (
            <div 
              key={letter.id} 
              className="envelope"
              onClick={() => openLetter(letter)}
              style={{ '--accent-color': letter.color }}
            >
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-title">{letter.title}</div>
                <div className="envelope-heart">❤️</div>
              </div>
            </div>
          ))}
        </div>

        <div className="special-message">
          <p>💕 Every letter is a reminder of how much you mean to me 💕</p>
        </div>
      </div>

      {selectedLetter && (
        <div className="letter-modal" onClick={closeModal}>
          <div className="letter-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="letter-paper" style={{ '--accent-color': selectedLetter.color }}>
              <div className="letter-header">
                <div className="letter-date">With all my love, always</div>
              </div>
              <div className="letter-body">
                <p>{selectedLetter.message}</p>
              </div>
              <div className="letter-footer">
                <span>Forever yours,</span>
                <span>Your loving partner ❤️</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoveLetters;