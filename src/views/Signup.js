import React from 'react';
import SignupForm from '../components/sections/SignupForm';

import GenericSection from '../components/sections/GenericSection';

class Signup extends React.Component {
  render() {

   

    return (
      <React.Fragment>
        <SignupForm hasBgColor invertColor/>
      </React.Fragment>
      
    );
  }
}

export default Signup;