import React from 'react';

const Section = ({ title, content, image }) => (
  
  <div className="section">
    <div className="section-content">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
    <div className="section-image">
      <img src={image} alt={title} />
    </div>
  </div>

  
);

export default Section;