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

class MortCost extends React.Component {

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
        interestRate: "",
        monthlyPaymentAmount: "",
        loanAmount: "",
        termLength: ""
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

  setResult(result) {
    this.setState({ result });
  }

  calculateAndSetResults() {
    /* eslint no-eval: 0 */
    let result = 0;
    let loanAmount;
    let interestRate;
    let numberOfMonths;
    let monthlyPaymentAmount;
    switch (this.state.selectedOption) {
      case "FM":
        if (
          this.state.details.loanAmount.trim() !== "" &&
          this.state.details.interestRate.trim() !== "" &&
          this.state.details.termLength.trim() !== ""
        ) {
          loanAmount = eval(this.state.details.loanAmount);
          interestRate = eval(this.state.details.interestRate / 1200);
          numberOfMonths = eval(this.state.details.termLength * 12);
          result =
            eval(loanAmount * interestRate) /
            (1 - Math.pow(1 + interestRate, numberOfMonths * -1)).toFixed(2);
          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FLA":
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        interestRate = this.state.details.interestRate;
        if (
          monthlyPaymentAmount !== "" &&
          numberOfMonths !== "" &&
          interestRate !== ""
        ) {
          interestRate = interestRate / 1200;
          result = eval(
            (monthlyPaymentAmount / interestRate) *
              (1 - 1 / Math.pow(1 + interestRate, numberOfMonths))
          ).toFixed(2);
          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FMP":
        loanAmount = this.state.details.loanAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        interestRate = this.state.details.interestRate;
        if (loanAmount !== "" && numberOfMonths !== "" && interestRate !== "") {
          interestRate = interestRate / 1200;
          result = eval(
            (loanAmount *
              interestRate *
              Math.pow(1 + interestRate, numberOfMonths)) /
              (Math.pow(1 + interestRate, numberOfMonths) - 1)
          ).toFixed(2);

          result = `$${result}`;
        } else {
          this.setError();
        }
        break;

      case "FIR":
        loanAmount = this.state.details.loanAmount;
        numberOfMonths = this.state.details.numberOfMonths;
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        if (
          monthlyPaymentAmount !== "" &&
          numberOfMonths !== "" &&
          loanAmount !== ""
        ) {
          const F = (x) =>
            (loanAmount * x * Math.pow(1 + x, numberOfMonths)) /
              (Math.pow(1 + x, numberOfMonths) - 1) -
            monthlyPaymentAmount;
          const F_prime = (x) =>
            (loanAmount *
              Math.pow(x + 1, numberOfMonths - 1) *
              (x * Math.pow(x + 1, numberOfMonths) +
                Math.pow(x + 1, numberOfMonths) -
                numberOfMonths * x -
                x -
                1)) /
            Math.pow(Math.pow(x + 1, numberOfMonths) - 1, 2);

          const guess =
            1 + ((monthlyPaymentAmount * numberOfMonths) / loanAmount - 1) / 12;

          let x = guess;

          while (Math.abs(F(x)) > 1e-6) {
            x = x - F(x) / F_prime(x);
          }
          x = (12 * x * 100).toFixed(2);
          result = `${x}%`;
        } else {
          this.setError();
        }
        break;

      case "FNM":
        loanAmount = this.state.details.loanAmount;
        monthlyPaymentAmount = this.state.details.monthlyPaymentAmount;
        interestRate = this.state.details.interestRate;
        if (
          loanAmount !== "" &&
          monthlyPaymentAmount !== "" &&
          interestRate !== ""
        ) {
          interestRate = interestRate / 1200;
          result = eval(
            Math.log(
              monthlyPaymentAmount /
                interestRate /
                (monthlyPaymentAmount / interestRate - loanAmount)
            ) / Math.log(1 + interestRate)
          ).toFixed(2);
        } else {
          this.setError();
        }
        break;
      default:
        break;
    }

    this.setResult(result);
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
        className="resultBlock"
        style={{ display: (this.state.result && "flex") || "none" }}
      >
        <span className="mt-0 mb-32">
          Result: {this.state.resultLabel} = {this.state.result}
        </span>
      </div>
    );
  }

  renderInputControls() {
    const list = controlList[this.state.selectedOption];

    return (
      <React.Fragment>
        {list.map((item) => {
          return (
            <div className="input-control flex_1" key={item.event}>
              <label>{item.label}</label>
              <Input
                type="number"
                onChange={(e) => this.onInputChange(e, item.event)}
                value={this.state.details[item.event]}
              />
            </div>
          );
        })}
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
            <h2 className="mt-0">Mortgage Cost Calculator</h2>
            <p>
              How much should you spend?
            </p>
            <p>
              The first step to becoming a homeowner is knowing how much you realistically can afford. 
              There are several factors to consider before making a home purchase including purchase price, downpayment, mortgage terms, insurance and taxes.
            </p>

            <div class="box">
						<span class="image featured"><img src="images\pexels-kampus-8730060.jpg" alt="" /></span>
					</div>

          <div className="container-xs">
            <div className="wrapperInner">
              <form style={formStyle} onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="mb-24">
                  <label>Please Select Type</label>
                  <Select
                    options={selectOptions}
                    onChange={(obj) => this.onChangeHandle(obj)}
                    isSearchable={false}
                    isClearable={false}
                    defaultValue={selectOptions[0]}
                  />
                </div>
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

export default MortCost;