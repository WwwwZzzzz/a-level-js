import React from 'react';
import { connect } from 'react-redux';

const DrawPost = ({ name, description, images }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export default connect((state) => state.promise.postlistById?.payload)(DrawPost);
