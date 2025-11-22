import React, { useState } from 'react';
import './styles/App.css';
import About from './components/About';
import SmallCard from './components/SmallCard';
import BigCard from './components/BigCard';

function App() {
  const [showBigCard, setShowBigCard] = useState(false);

  return (
    <div className="App">
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
          onClose={() => setShowBigCard(false)}
        />
      )}
    </div>
  );
}

export default App;
