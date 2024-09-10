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

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4wcehcx', 'template_xk6li3r', form.current, {
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


  const thirdClasses = classNames(
    'tiles-item-inner',
  );

  const formStyle = {
    maxWidth: '420px',
    margin: '0 auto'
  }


  return (
    <section className = {outerClasses}>
      <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
      <div  className={innerClasses}>
          <div className="tiles-wrap">
            <div>
              <div className={thirdClasses}>
                <form ref={form} onSubmit={sendEmail} style={formStyle}>
                  <br></br>
                  <div className="mb-24">
                    <Input type="text" name="name"
                      label="This is a label"
                      placeholder="Your Name"
                      formGroup="contact"
                      labelHidden/>
                  </div>
                  <div className="mb-24">
                    <Input type="text" name="email"
                      label="This is a label"
                      placeholder="Your best email.."
                      formGroup="contact"
                      labelHidden/>
                  </div>
                  <div className="mb-24">
                    <Input type="text" name="phoneNumber"
                      label="This is a label"
                      placeholder="Your best phone number.."
                      formGroup="contact"
                      labelHidden/>
                  </div>
                  <div className="mb-24">
                    <Input type="textarea" name="comment"
                      label="This is a label"
                      placeholder="Comments.."
                      formGroup="contact"
                      labelHidden/>
                  </div>
                  <div className="mt-24 mb-32">
                    <Button type="submit" color="primary">Send</Button>
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