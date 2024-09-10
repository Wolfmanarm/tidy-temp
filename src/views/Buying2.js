import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeader from '../components/sections/partials/SectionHeader';
import classNames from 'classnames';

import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';

const sectionHeader = {
  title: 'Enter your information below and I will contact you ASAP',
};

export const Buying2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4wcehcx', 'template_yx65bk9', form.current, {
        publicKey: 'lOnpKXniQaGy2_3ux',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const class1 = 'signin section';
  const class2 = 'has-top-divider';

  const combinedClasses = classNames(class1, class2);

  const outerClasses = classNames(
    'signin section',
    'has-top-divider',
    'has-bottom-divider',
    'has-bg-color',
    'invert-color',
  );

  const innerClasses = classNames(
    'signin-inner section-inner',
    'has-top-divider',
    'has-bottom-divider',
    'has-bg-color',
    'invert-color',
  );



  const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
  }

  //className="tiles-item"
  return (
    <section className = {outerClasses}>
      <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
      <div  className={innerClasses}>
          <div className="tiles-wrap">
            <div>
              <div className='tiles-item-inner'>
                <form ref={form} onSubmit={sendEmail} style={formStyle}>
                    <div>
                        <div className="mb-24">
                            <br></br>
                            <Input
                            type="text"
                            name="name"
                            label="This is a label"
                            placeholder="Name"
                            formGroup="desktop"
                            labelHidden>
                            </Input>
                        </div>
                        <div className="mb-24">
                            <Input
                            type="email"
                            name="email"
                            label="This is a label"
                            placeholder="Email"
                            formGroup="desktop"
                            labelHidden>
                            </Input>
                        </div>
                        <hr />
                        <div class="col-12">
                            <select class='form-select' name="propertyType" id="category">
                                <option value="">- Property Type -</option>
                                <option value="House">House</option>
                                <option value="Condominium">Condominium</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Cottage">Cottage</option>
                                <option value="Duplex">Duplex</option>
                                <option value="Mobile Home">Mobile Home</option>
                                <option value="Multi-Family">Multi-Family</option>
                                <option value="Townhouse">Townhouse</option>
                                <option value="Vacant Land">Vacant Land</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="age" id="category">
                                <option value="">- Age -</option>
                                <option value="New Construction">New Construction</option>
                                <option value="Under 5 Years">Under 5 Years</option>
                                <option value="Under 10 Years">Under 10 Years</option>
                                <option value="Under 20 Years1">Under 20 Years</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="purpose" id="category">
                                <option value="">- Purpose -</option>
                                <option value="Primary Home">Primary Home</option>
                                <option value="Second Home">Second Home</option>
                                <option value="Investment Property">Investment Property</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="floors" id="category">
                                <option value="">- Floors -</option>
                                <option value="One Story">One Story</option>
                                <option value="Two Story">Two Story</option>
                                <option value="No Preference">No Preference</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="beds" id="category">
                                <option value="">- Beds -</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="baths" id="category">
                                <option value="">- Baths -</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="budget" id="category">
                                <option value="">- Budget -</option>
                                <option value="Under $250K"> Under $250K</option>
                                <option value="$250K - $500K">$250K - $500K</option>
                                <option value="$500K - $750K">$500K - $750K</option>
                                <option value="$750K - $1M">$750K - $1M</option>
                                <option value="$1M +">$1M +</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <select class='form-select' name="purchaseTimeline" id="category">
                                <option value="">- Purchase Timeline -</option>
                                <option value="ASAP"> ASAP </option>
                                <option value="Within 3 Months">Within 3 Months</option>
                                <option value="Within 6 Months">Within 6 Months</option>
                                <option value="Within 1 Year">Within 1 Year</option>
                                <option value="1 Year Plus">1 Year Plus</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3>Interior Features</h3>
                        <h4>(Select all that apply)</h4>
                        <div>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="ac" name="ac"/>
                            A/C</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="accessible" name="accessible" />
                            Accessible</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="kitchen appliances" name="kitchenAppliances" />
                            Kitchen Appliances</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Laundry Appliances" name="laundryAppliances" />
                            Laundry Appliances</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Gas Stove" name="gasStove" />
                            Gas Stove</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Basement - Finished" name="basementFinished" />
                            Basement-Finished</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Basement - Unfinished" name="basementUnfinished" />
                            Basement-Unfinished</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Basement - Walkout" name="basementWalkout" />
                            Basement-Walkout</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Media Room" name="mediaRoom" />
                            Media Room</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Central Vacuum" name="centralVacuum" />
                            Central Vacuum</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Den/Office" name="denOffice" />
                            Den/Office</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Ensuite Master Bathroom" name="ensuiteMasterBathroom" />
                            Ensuite Master Bathroom</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Fireplace" name="fireplace" />
                            Fireplace</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Hardwood Floors" name="hardwoodFloors" />
                            Hardwood Floors</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Tile Floors" name="tileFloors" />
                            Tile Floors</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Granite/Quartz/Marble Counters" name="counters" />
                            Granite/Quartz/Marble Counters</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Home Gym" name="homeGym" />
                            Home Gym</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Loft" name="loft" />
                            Loft</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Mother-in-Law Suite" name="motherInLawSuite" />
                            Mother-in-Law Suite</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Mud Room" name="mudRoom" />
                            Mud Room</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Security System" name="securitySystem" />
                            Security System</label>
                            <label class='form-checkbox'>
                            <input type="checkbox" id="Walk-in Closet" name="walkInCloset" />
                            Walk-in Closet</label>
                        </div>

                        <h3>Exterior Features</h3>
                        <h4>(Select all that apply)</h4>

                        <div>
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
                        

                        <div>
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
                            <Button>Submit</Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="signin-bottom has-top-divider">
                  <div className="pt-32 text-xs center-content">
                    Or call me directly: 
                    <h2>250-564-4488</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};