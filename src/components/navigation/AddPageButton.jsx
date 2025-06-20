import React from 'react';
import PropTypes from 'prop-types';

const AddPageButton = ({ onClick }) => (
  <div className="flex items-center mx-2">
    <div className="border-t border-dashed border-gray-300 w-8"></div>
    <button
      className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-300 text-blue-500 hover:bg-blue-100 ml-[-8px] z-10"
      title="Add page"
      onClick={onClick}
    >
      +
    </button>
    <div className="border-t border-dashed border-gray-300 w-8"></div>
  </div>
);

AddPageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddPageButton;