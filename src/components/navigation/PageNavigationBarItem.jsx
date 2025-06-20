import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_ITEM_STYLES } from '../../styles/pageItemStyles';

const PageNavigationBarItem = ({
  page,
  state,
  onClick,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) => {
  const style = PAGE_ITEM_STYLES[state] || PAGE_ITEM_STYLES.default;
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-lg transition outline-none ${style.container} ${style.border} ${style.ring}`}
      style={{ minWidth: 90 }}
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      tabIndex={0}
    >
      <span className={`mr-2 ${style.icon}`}>{page.icon}</span>
      {page.name}
    </button>
  );
};

PageNavigationBarItem.propTypes = {
  page: PropTypes.object.isRequired,
  state: PropTypes.oneOf(['active', 'focused', 'default', 'hover']),
  onClick: PropTypes.func,
  draggable: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
};

export default PageNavigationBarItem;