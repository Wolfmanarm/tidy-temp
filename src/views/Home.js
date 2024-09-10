import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import News from '../components/sections/News';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit hasBgColor invertColor />
        <FeaturesTiles />
        <News className="illustration-section-01" />
        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

export default Home;