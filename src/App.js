import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutAlternative from './layouts/LayoutAlternative';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Secondary from './views/Secondary';
import Login from './views/Login';
import Signup from './views/Signup';
import Buying from './views/Buying';
import Selling from './views/Selling';
import MortCost from './views/mortcostcalc';
import MortApprove from './views/mortapprovecalc';
import {ContactUs} from './views/contact';
import {Buying2} from './views/Buying2';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/secondary" component={Secondary} layout={LayoutAlternative} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />
            <AppRoute exact path="/buying" component={Buying} layout={LayoutAlternative} />
            <AppRoute exact path="/selling" component={Selling} layout={LayoutAlternative} />
            <AppRoute exact path="/mortapprovecalc" component={MortApprove} layout={LayoutAlternative} />
            <AppRoute exact path="/mortcostcalc" component={MortCost} layout={LayoutAlternative} />
            <AppRoute exact path="/contact" component={ContactUs} layout={LayoutAlternative} />
            <AppRoute exact path="/buying2" component={Buying2} layout={LayoutAlternative} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);