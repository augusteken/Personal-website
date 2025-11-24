import React, { useState } from 'react';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';

function HomePage() {
  const [showBigCard, setShowBigCard] = useState(false);

  return (
    <>
      <SmallCard 
        name="August Ek" 
        email="augustek@live.se" 
        phoneNumber="+46 70 511 48 04"
        onClick={() => setShowBigCard(true)}
      />

      {showBigCard && (
        <BigCard 
          name="August Ek" 
          email="augustek@live.se"
          phoneNumber="+46 70 511 48 04"
          facebook="https://www.facebook.com/august.ek.9"
          linkedin="https://www.linkedin.com/in/august-ek-516188136/"
          github="https://github.com/augusteken"
          gitlab="https://gitlab.liu.se/augek130"
          onClose={() => setShowBigCard(false)}
        />
      )}
    </>
  );
}

export default HomePage;