import React, { useContext } from 'react';
import AboutContext from './AboutContext';

function About() {
  const [aboutTitle] = useContext(AboutContext);
  return <div>About: {aboutTitle}</div>;
}

export default About;