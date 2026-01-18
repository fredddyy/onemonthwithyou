import React from 'react';
import './OurStory.css';

const OurStory = () => {

  return (
    <section id="our-story" className="our-story">
      <div className="container">
        <h2 className="section-title">Dear Grizz</h2>
        <div className="story-poem">
          <div className="poem-image">
            <img src={process.env.PUBLIC_URL + "/1.jpg"} alt="Our Love" className="poem-picture" />
          </div>
          
          <div className="poem-content">
            <div className="poem-stanza">
              <p className="poem-line">It's only been a month but it feels like a lifetime</p>
              <p className="poem-line">Like the universe carved a space just big enough for you to step into my life at the exact moment I needed you</p>
              <p className="poem-line">If I had to explain why I know it's you, I'd have little to no words</p>
              <p className="poem-line">You're not a love I can easily define because when you speak it's not with sounds</p>
              <p className="poem-line">I don't hear you with my ears</p>
              <p className="poem-line">I hear you with my heart and soul</p>
            </div>

            <div className="poem-stanza">
              <p className="poem-line">You're object of all my affection and opposition to my chaos</p>
              <p className="poem-line">And even with all of this said, it's so much more than that</p>
              <p className="poem-line">My words as raw as they may seem don't carry the weight of how I feel</p>
              <p className="poem-line">With you, I have peace, I've found rest and I know love</p>
              <p className="poem-line">You're infinite to me</p>
              <p className="poem-line">The embodiment of Love and evidence of the goodness of God</p>
              <p className="poem-line">A testament that God sees my heart and my desires</p>
            </div>

            <div className="poem-stanza">
              <p className="poem-line">And finally, because you're literally one (ire)</p>
              <p className="poem-line">I leave a blessing for you</p>
              <p className="poem-line">In the name of the Lord Jesus,</p>
              <p className="poem-line">I ask our Father in heaven to cover and protect you in every room and space your footsteps into</p>
              <p className="poem-line">To guide you when you're confused and use his mighty hand to uplift you among your peers</p>
            </div>

            <div className="poem-stanza">
              <p className="poem-line">You will shine bright and the purpose that God has for you will be revealed to you</p>
              <p className="poem-line">Psalm 32:8 says He will instruct you and teach you in the way you should go and counsel you with his loving eye on you</p>
              <p className="poem-line">This is the word of your life</p>
              <p className="poem-line">You will receive direction from the most High and feel the peace of his presence all around you</p>
              <p className="poem-line">You are seen and supported by the almighty</p>
              <p className="poem-line">You will never fail</p>
            </div>

            <div className="poem-stanza">
              <p className="poem-line">God will give you strength when you feel the pressure of this world and fight your battles for you</p>
              <p className="poem-line">The Lord will sharpen your mind, steady your heart and guard your spirit</p>
              <p className="poem-line">When you are tired, He will renew your strength</p>
              <p className="poem-line">When you're in doubt, He will remind you of His nature</p>
              <p className="poem-line">He will bless the works of your hands</p>
              <p className="poem-line">And order your steps</p>
              <p className="poem-line">He will keep you in good and perfect health</p>
            </div>

            <div className="poem-stanza">
              <p className="poem-line">May the Lord open doors meant for you and close the ones that drain you</p>
              <p className="poem-line">May favor locate you naturally and may you be the preferred among many</p>
              <p className="poem-line">May God help me love you in ways that will help you step into the man you're already destined to be</p>
              <p className="poem-line">And may our relationship be a blessing to others and a place of rest for you</p>
            </div>

            <div className="poem-signature">
              <p className="amen">Amen</p>
              <p className="love-message">I love you with all of my heart and soul</p>
              <p className="ps-note">(PS: I cried writing this lol, you really mean everything to me haha)</p>
              <p className="signature">— Zoe</p>
            </div>
          </div>
        </div>
        <div className="our-song">
          <h3 className="song-title">Our Song</h3>
          <p className="song-description">This song best describes you❤️</p>
          <div className="spotify-player">
            <iframe 
              src="https://open.spotify.com/embed/track/3xxIFDDNuQT35JcVjqXCwI?si=19Vq_H5NQIig5S-S9GMxBg&nd=1&dlsi=403ecf8670c14f37"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Audio Player"
            ></iframe>
          </div>
        </div>
        <div className="love-quote">
          <blockquote>
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            <cite>— Zoe</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default OurStory;