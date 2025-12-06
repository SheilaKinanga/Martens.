import React from 'react';
import './NewsandEvents.css';
import productLaunchVideo from '../../assets/ProductLaunch.mp4';
import activation1 from '../../assets/activation1.jpeg';
import activation2 from '../../assets/activation2.jpeg';
import activation3 from '../../assets/activation3.jpeg';
import activation4 from '../../assets/activation4.jpeg';

const NewsandEvents = () => {
  return (
    <div className="news-and-events">
      <section className="events">
        <h2>Events</h2>

        <div className="product-launch">
          <h3>Product Launch</h3>
          <div className="video-container">
            <video width="600" controls>
              <source src={productLaunchVideo} type="video/mp4" />
            </video>
            <div className="video-description">
              <p>Join us for the launch of our latest product! This groundbreaking event highlights the features and benefits that make this product a game-changer in its field.</p>
            </div>
          </div>
        </div>

        <div className="brand-activation">
          <h3>Ongoing Brand Activation</h3>
          <div className="image-gallery">
            <div className="image-item">
              <img src={activation1} alt="activation 1" />
              <div className="image-description">Our latest brand activation event - showcasing our new product line.</div>
            </div>
            <div className="image-item">
              <img src={activation2} alt="activation 2" />
              <div className="image-description">Engaging with customers during the brand activation.</div>
            </div>
            <div className="image-item">
              <img src={activation3} alt="activation 3" />
              <div className="image-description">Live demos and hands-on experiences during the event.</div>
            </div>
            <div className="image-item">
              <img src={activation4} alt="activation 4" />
              <div className="image-description">Community interaction at its finest, with special giveaways.</div>
           
          </div>
          </div>
            <div>
              <button className='btn'>Find more here</button>
            </div>
        </div>

        <div className='news'>
          <h2>News</h2>
          <p>Look out for exciting news and don't forget to follow our socials for timely updates.</p>
        </div>
      </section>
    </div>
  );
}

export default NewsandEvents;
