import React, { useState, useEffect } from 'react';

import SectionHero from 'components/SectionHero/'
import SectionWork from 'components/SectionWork/'
import SectionAbout from 'components/SectionAbout'
import SectionFooter from 'components/SectionFooter'

function App() {
  const [calculate, setCalculate] = useState(0);

  useEffect(() => {
    onScrollHandle();
  }, []);

  const onScrollHandle = () => {
    window.addEventListener('scroll', () => {
      let calc;

      if ( window.scrollY < 600)
        calc = (window.scrollY / 10.2) + `%`;

      setCalculate(calc);
    });
  }

  let overflow = {
    overflow: 'hidden'
  }

  return (
    <div style={overflow}>
      <SectionHero calculate={calculate} />
      <SectionAbout />
      <SectionWork />
      <SectionFooter />
    </div>
  );
}

export default App;
