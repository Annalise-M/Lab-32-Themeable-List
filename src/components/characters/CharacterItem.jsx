import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, img }) => (
  <figure>
    <img src={img} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default CharacterItem;
