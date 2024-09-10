import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import Testimonial from '../components/sections/Testimonial';
import Clients from '../components/sections/Clients';
import Team from '../components/sections/Team';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';


import selectOptions from "../utils/selectOption.json";
import controlList from "../utils/controls.json";
import Select from "react-select";
import { Link } from 'react-router-dom';

class MortApprove extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      details: {
        numberOfMonths: "",
        annualIncome: "",
        heating: "",
        propTaxes: "",
        maintCondoFee: "",
        debtPayments: "",
        downPayment: "",
        interestRate: "",
        GDSPayment: "",
        TDSPayment: "",
        ammortization: ""
      },
      selectedOption: "FM",
      error: false,
      resultLabel: "Mortgage"
    };
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  onSubmitHandle(e) {
    e.preventDefault();
    this.calculateAndSetResults();
  }

  clearAll() {
    this.setState({
      error: false,
      details: {
        numberOfMonths: "",
        interestRate: "",
        monthlyPaymentAmount: "",
        loanAmount: "",
        termLength: ""
      },
      result: 0
    });
  }

  setError() {
    this.setState({ error: true });
  }

  setResult(result, amortization, interestRate) {
    this.setState({ result });
    this.setState({ amortization });
    this.setState({ interestRate });
  }

  calculateAndSetResults() {
    /* eslint no-eval: 0 */
    let result = 0;
    let annualIncome;
    let heating;
    let propTaxes;
    let maintCondoFee;
    let debtPayments;
    let downPayment;
    let interestRate;
    let GDSPayment;
    let TDSPayment;
    let amortization;
    let realInterestRate;

    if (
      this.state.details.annualIncome !== "" &&
      this.state.details.heating !== "" &&
      this.state.details.propTaxes !== "" &&
      this.state.details.maintCondoFee !== "" &&
      this.state.details.debtPayments !== "" &&
      this.state.details.downPayment !== "" &&
      this.state.details.interestRate !== "" &&
      this.state.details.amortization !== ""
    ) {
      annualIncome = eval(this.state.details.annualIncome);
      heating = eval(this.state.details.heating);
      propTaxes = eval(this.state.details.propTaxes);
      maintCondoFee = eval(this.state.details.maintCondoFee);
      debtPayments = eval(this.state.details.debtPayments);
      downPayment = eval(this.state.details.downPayment);
      interestRate = eval(this.state.details.interestRate);
      amortization = eval(this.state.details.amortization);

      GDSPayment = (annualIncome/12*0.39) - heating - propTaxes - maintCondoFee;
      TDSPayment = (annualIncome/12*0.44) - heating - propTaxes - maintCondoFee - debtPayments;

      if (GDSPayment < TDSPayment) {
        realInterestRate = interestRate / 1200;
          result = eval(
            (GDSPayment / realInterestRate) *
              (1 - 1 / Math.pow(1 + realInterestRate, amortization*12))
          ).toFixed(2);
        result = eval(+result + +downPayment).toFixed(2);
      }
      else {
        realInterestRate = interestRate / 1200;
          result = eval(
            (GDSPayment / realInterestRate) *
              (1 - 1 / Math.pow(1 + realInterestRate, amortization*12))
          ).toFixed(2);
        result = eval(+result + +downPayment).toFixed(2);
      }

      if (result > downPayment/0.05){
        result = downPayment/0.05
      }
        


    } else {
      this.setError();
    }

    this.setResult(result, amortization, interestRate);
  }

  onChangeHandle({ value, resultLabel }) {
    this.clearAll();
    this.setState({ selectedOption: value, resultLabel: resultLabel });
  }

  onInputChange(e, type) {
    e.persist();
    this.setState((state) => {
      state.details[type] =
        e.target.value.trim() >= 0 ? e.target.value.trim() : "";
      state.result = 0;
      state.error = false;
      return state;
    });
  }

  Error() {
    return (
      <div
        className="errorWrap align-center"
        style={{
          display: (this.state.error && "flex") || "none",
          color: "red"
        }}
      >
        <em>Please insert vaild inputs!</em>
      </div>
    );
  }

  Results() {
    return (
      <div
        style={{ display: (this.state.result && "block") || "none" }}
      >
        <span className="mt-0 mb-32">
          Based on a 5-year fixed mortgage with a {this.state.amortization} year amortization and a {this.state.interestRate}% interest rate, your maximum mortgage ammount would be: 
        </span>
        <h4>${this.state.result}</h4>
        <Link to="/signup/" className="button button-primary button-wide-mobile button-sm">
        Contact For More Information
        </Link>
      </div>
    );
  }

  renderInputControls() {
    return (
      <React.Fragment>
        <div className="input-control flex_1" key='annualIncome'>
          <h4>Annual Income</h4>
          <label>Your Household income</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'annualIncome')}
            value={this.state.details['annualIncome']}
          />
        </div>
        <h4>Monthly Expenses</h4>
        <div className="mb-24" key='heating'>
          <label>Heating</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'heating')}
            value={this.state.details['heating']}
          />
        </div>
        <div className="mt-0" key='propTaxes'>
          <label>Property Taxes</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'propTaxes')}
            value={this.state.details['propTaxes']}
          />
        </div>
        <div className="mt-0" key='maintCondoFee'>
          <label>Maintenance/Condo Fee</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'maintCondoFee')}
            value={this.state.details['maintCondoFee']}
          />
        </div>
        <div className="mt-0" key='debtPayments'>
          <label>Loan/Line of Credit Payments</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'debtPayments')}
            value={this.state.details['debtPayments']}
          />
        </div>
        <h4>Mortgage Details</h4>
        <div className="mb-24" key='downPayment'>
          <label>Your Down Payment</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'downPayment')}
            value={this.state.details['downPayment']}
          />
        </div>
        <div className="mb-24" key='interestRate'>
          <label>Interest Rate</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'interestRate')}
            value={this.state.details['interestRate']}
          />
        </div>
        <div className="mb-24" key='amortization'>
          <label>Mortgage Amortization In Years</label>
          <Input
            type="number"
            onChange={(e) => this.onInputChange(e, 'amortization')}
            value={this.state.details['amortization']}
          />
        </div>
      </React.Fragment>
    );
  }

  render() {

    const genericSection01Header = {
      title: 'Newsletter modal is a component commonly used'
    }    

    const genericSection02Header = {
      title: 'Button is a component commonly used'
    }

    const genericSection03Header = {
      title: 'Input form is a component commonly used'
    }

    const genericSection04Header = {
      title: 'Frequently asked questions'
    }    

    return (
      <React.Fragment>

        <GenericSection className="has-bg-color-cut illustration-section-02"  hasBgColor invertColor topDivider>
          <div className="container-xs">
            <h2 className="mt-0">Mortgage Affordability Calculator</h2>
            <p>
              How much can you afford?
            </p>
            <p>
              Use this calculator to get an estimate for of the price range which would fit your budget.
            </p>

            <div class="box">
						<span class="image featured"><img src="images\pexels-kampus-8730060.jpg" alt="" /></span>
					</div>

          <div className="container-xs">
            <div className="wrapperInner">
              <form style={formStyle} onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="mb-24">
                  {this.renderInputControls()}
                </div>
                <div className="mb-24">
                  <Button
                    color="primary"
                    type="submit"
                    className="submitBtn "
                    data-event_tag="CalculateBtnClick"
                    data-event_action="UserClick">
                    Calculate
                  </Button>
                  <Button
                    type="button"
                    className="cancelBtn "
                    data-event_tag="ClearAllClick"
                    data-event_action="UserClick"
                    onClick={this.clearAll}
                  >
                    Clear All
                  </Button>
                </div>
              </form>
              {this.Error()}
              {this.Results()}
            </div>
          </div>
        </div>
        </GenericSection>              


      

        <GenericSection topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection04Header} className="center-content" />
            <Accordion>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut." active>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
              <AccordionItem title="Nisi porta lorem mollis aliquam ut.">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>         

        <Cta invertColor split className="has-bg-color-cut" />
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: '420px',
  margin: '0 auto'
}

const modalFormStyle = {
  maxWidth: '320px',
  margin: '0 auto'
}

export default MortApprove;