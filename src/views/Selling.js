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

class Selling extends React.Component {

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

  state = {
    buyingModalActive: false
  }

  openBuyingModal = (e) => {
    e.preventDefault();
    this.setState({ buyingModalActive: true });
  }

  closeBuyingModal = (e) => {
    e.preventDefault();
    this.setState({ buyingModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Newsletter modal is a component commonly used'
    }    

    const genericSection02Header = {
      title: 'Button is a component commonly used'
    }

    const genericSection03Header = {
      title: 'Selling a Property? Enter the details of the property you are looking for to start the search.'
    }

    const genericSection04Header = {
      title: 'Frequently asked questions'
    }    

    return (
      <React.Fragment>

        <GenericSection hasBgColor invertColor topDivider>
          <div className="container-xs">
            <SectionHeader data={genericSection03Header} className="center-content" />
              <form style={formStyle} method="post" action="#">
                  <div class="row gtr-uniform gtr-50">
                      <div class="col-6 col-12-mobilep">
                        <Input
                          type="names"
                          label="This is a label"
                          placeholder="Name"
                          formGroup="desktop"
                          labelHidden>
                        </Input>
                      </div>
                      <div class="col-6 col-12-mobilep">
                        <Input
                          type="email"
                          label="This is a label"
                          placeholder="Email"
                          formGroup="desktop"
                          labelHidden>
                        </Input>
                      </div>
                      <hr />
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Property Type -</option>
                              <option value="1">House</option>
                              <option value="1">Condominium</option>
                              <option value="1">Apartment</option>
                              <option value="1">Cottage</option>
                              <option value="1">Duplex</option>
                              <option value="1">Mobile Home</option>
                              <option value="1">Multi-Family</option>
                              <option value="1">Townhouse</option>
                              <option value="1">Vacant Land</option>
                              <option value="1">Other</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Age -</option>
                              <option value="1">New Construction</option>
                              <option value="1">Under 5 Years</option>
                              <option value="1">Under 10 Years</option>
                              <option value="1">Under 20 Years</option>
                              <option value="1">No Preference</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Purpose -</option>
                              <option value="1">Primary Home</option>
                              <option value="1">Second Home</option>
                              <option value="1">Investment Property</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Floors -</option>
                              <option value="1">One Story</option>
                              <option value="1">Two Story</option>
                              <option value="1">No Preference</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Beds -</option>
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="1">5</option>
                              <option value="1">6</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Baths -</option>
                              <option value="1">1</option>
                              <option value="1">2</option>
                              <option value="1">3</option>
                              <option value="1">4</option>
                              <option value="1">5</option>
                              <option value="1">6</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Budget -</option>
                              <option value="1"> Under $250K</option>
                              <option value="1">$250K - $500K</option>
                              <option value="1">$500K - $750K</option>
                              <option value="1">$750K - $1M</option>
                              <option value="1">$1M +</option>
                          </select>
                      </div>
                      <div class="col-12">
                          <select class='form-select' name="category" id="category">
                              <option value="">- Purchase Timeline -</option>
                              <option value="1"> ASAP </option>
                              <option value="1">Within 3 Months</option>
                              <option value="1">Within 6 Months</option>
                              <option value="1">Within 1 Year</option>
                              <option value="1">1 Year Plus</option>
                          </select>
                      </div>
                  </div>
                  <hr />
                  <div>
                      <h3>Interior Features</h3>
                      <h4>(Select all that apply)</h4>
                      <div class="col-4 col-12-narrower">
                          <label class='form-checkbox'>
                          <input type="checkbox" id="ac" name="ac"/>
                          A/C</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="accessible" name="accessible" />
                          Accessible</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="kitchen appliances" name="kitchen appliances" />
                          Kitchen Appliances</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Laundry Appliances" name="Laundry Appliances" />
                          Laundry Appliances</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Gas Stove" name="Gas Stove" />
                          Gas Stove</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Basement - Finished" name="Basement - Finished" />
                          Basement-Finished</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Basement - Unfinished" name="Basement - Unfinished" />
                          Basement-Unfinished</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Basement - Walkout" name="Basement - Walkout" />
                          Basement-Walkout</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Media Room" name="Media Room" />
                          Media Room</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Central Vacuum" name="Central Vacuum" />
                          Central Vacuum</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Den/Office" name="Den/Office" />
                          Den/Office</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Ensuite Master Bathroom" name="Ensuite Master Bathroom" />
                          Ensuite Master Bathroom</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Fireplace" name="Fireplace" />
                          Fireplace</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Hardwood Floors" name="Hardwood Floors" />
                          Hardwood Floors</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Tile Floors" name="Tile Floors" />
                          Tile Floors</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Granite/Quartz/Marble Counters" name="Granite/Quartz/Marble Counters" />
                          Granite/Quartz/Marble Counters</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Home Gym" name="Home Gym" />
                          Home Gym</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Loft" name="Loft" />
                          Loft</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Mother-in-Law Suite" name="Mother-in-Law Suite" />
                          Mother-in-Law Suite</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Mud Room" name="Mud Room" />
                          Mud Room</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Security System" name="Security System" />
                          Security System</label>
                          <label class='form-checkbox'>
                          <input type="checkbox" id="Walk-in Closet" name="Walk-in Closet" />
                          Walk-in Closet</label>
                      </div>

                      <h3>Exterior Features</h3>
                      <h4>(Select all that apply)</h4>

                      <div class="col-4 col-12-narrower">
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Backyard" name="Backyard" />
                        Backyard</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Garage" name="Garage" />
                        Garage</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Paved Driveway" name="Paved Driveway" />
                        Paved Driveway</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Fence" name="Fence" />
                        Fence</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Hot Tub" name="Hot Tub" />
                        Hot Tub</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Pool" name="Pool" />
                        Pool</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Patio/Deck" name="Patio/Deck" />
                        Patio/Deck</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Shed" name="Shed" />
                        Shed</label>
                      </div>

                      <h3>Other Features</h3>
                      <h4>(Select all that apply)</h4>
                      

                      <div class="col-4 col-12-narrower">
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Gated Community" name="Gated Community" />
                        Gated Community</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Hospital" name="Nearby - Hospital" />
                        Nearby - Hospital</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Park/Playground" name="Nearby - Park/Playground" />
                        Nearby - Park/Playground</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - School" name="Nearby - School" />
                        Nearby - School</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Shopping" name="Nearby - Shopping" />
                        Nearby - Shopping</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Transit" name="Nearby - Transit" />
                        Nearby - Transit</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Lake" name="Nearby - Lake" />
                        Nearby - Lake</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Nearby - Worship (specify in comments)" name="Nearby - Worship (specify in comments)" />
                        Nearby - Worship (specify in comments)</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Pet Friendly" name="Pet Friendly" />
                        Pet Friendly</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="Smoker Friendly" name="Smoker Friendly" />
                        Smoker Friendly</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="View - Green/Park" name="View - Green/Park" />
                        View - Green/Park</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="View - Water" name="View - Water" />
                        View - Water</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="View - Mountain" name="View - Mountain" />
                        View - Mountain</label>
                        <label class='form-checkbox'>
                        <input type="checkbox" id="View - City" name="View - City" />
                        View - City</label>
                      </div>
                      
                      <div class="col-12">
                          <textarea class='form-input' name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                      </div>
                      <div class="col-12">
                        
                        
                          <div className="center-content" >
                          <Button
                            color="secondary"
                            aria-controls="demo-modal"
                            onClick={this.openBuyingModal}>Submit</Button>
                          </div>
                      </div>
                  </div>
              </form>
          </div>

          <Modal
              id="buying-modal"
              show={this.state.buyingModalActive}
              handleClose={this.closeBuyingModal}
            >
              <div className="center-content">
                <h3 className="mt-16 mb-8">Buying Form Submitted</h3>
                <p className="text-sm">
                  I will be in contact with you ASAP! Thank you.
                </p>
              </div>
            </Modal>
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
  maxWidth: '4200px',
  margin: '0 auto'
}

const modalFormStyle = {
  maxWidth: '320px',
  margin: '0 auto'
}

export default Selling;