import React from 'react';
import ferris from './ferris.jpg'



const divStyle = {
  width: '115%',
  height: '1100px',
  backgroundImage: `url(${ferris})`,
  backgroundSize: 'cover',
};

const FerrisPic = () => {
    return (
      <div fluid className="ferris" style={divStyle} />
    );

}

export default FerrisPic
