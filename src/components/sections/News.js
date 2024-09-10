import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class News extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'news section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'news-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'About Me',
      paragraph: 'I would love to help you with all your real estate needs!'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" id="about-me home-page">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/PrinceGeorge.jpg')}
                      alt="News 01"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Prince George home grown</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Born and raised in Prince George, I have a deep-rooted connection to this vibrant community. 
                        Growing up here, I've experienced firsthand the warmth, resilience, and unique charm that make our city so special. 
                        As a real estate agent, I’m passionate about helping others find their place in this incredible town, where I’m proud to call home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/honesty.jpg')}
                      alt="News 02"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Honesty and Integrity</a>
                      </h3>
                      <p className="mb-16 text-sm">
                      Integrity is the cornerstone of my real estate practice. I believe that honesty is the key to building lasting relationships and ensuring client satisfaction. 
                      Whether you're buying or selling, I am committed to providing transparent and straightforward advice, always putting your best interests first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/cycling.jpg')}
                      alt="News 03"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Competitive cycler</a>
                      </h3>
                      <p className="mb-16 text-sm">
                      When I’m not helping clients find their dream homes, you can often find me on the trails, pushing my limits as a competitive bicyclist. 
                      My passion for cycling goes hand in hand with my approach to real estate—both require dedication, discipline, and a drive to succeed
                      </p>
                    </div>
                    <div className="news-item-more text-xs mb-8">
                      <a href="#contact-me">Contact Me</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;