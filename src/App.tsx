import { useState, useEffect } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

const MainComponent = () => {
  const [activeComponent, setActiveComponent] = useState<number | undefined>(1); // Initially no active component

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const totalHeight = viewportHeight * 4;
      const newActiveComponent = Math.ceil(window.scrollY / viewportHeight);
      setActiveComponent(newActiveComponent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <PageOne isActive={activeComponent === 1} />
      <PageTwo isActive={activeComponent === 2} />
      <PageThree isActive={activeComponent === 3} />
      <PageFour isActive={activeComponent === 4} />
    </div>
  );
};

export default MainComponent;