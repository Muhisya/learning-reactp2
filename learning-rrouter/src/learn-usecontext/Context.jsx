import React, { useState } from 'react';
import AboutContext from './AboutContext';
import About from './About';

function Context() {
  const [title, setTitle] = useState("Tentang Website");

  return (
    <AboutContext.Provider value={[title, setTitle]}>
      <About />
    </AboutContext.Provider>
  );
}

export default Context;