import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageNavigationBarItem from './PageNavigationBarItem';
import AddPageButton from './AddPageButton';

const PageNavigationBar = ({
  pages,
  selectedIdx,
  onSelect,
  onAddPage,
  onAddPageEnd,
  onReorder,
}) => {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [focusIdx, setFocusIdx] = useState(null);

  return (
    <div className="flex items-center bg-gray-100 p-4 shadow" style={{ width: '1240px' }}>
      {pages.map((page, idx) => {
        let state = 'default';
        if (selectedIdx === idx) state = 'active';
        if (focusIdx === idx) state = 'focused';
        if (hoverIdx === idx) state = 'hover';
        return (
          <React.Fragment key={idx}>
            <PageNavigationBarItem
              page={page}
              state={state}
              onClick={() => onSelect(idx)}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              onFocus={() => setFocusIdx(idx)}
              onBlur={() => setFocusIdx(null)}
            />
            {idx < pages.length - 1 && (
              <AddPageButton onClick={() => onAddPage(idx)} />
            )}
          </React.Fragment>
        );
      })}
      <button
        className="ml-4 px-4 py-2 rounded-lg bg-white border border-gray-300 text-blue-500 hover:bg-blue-100 flex items-center"
        onClick={onAddPageEnd}
      >
        + Add page
      </button>
    </div>
  );
};

PageNavigationBar.propTypes = {
  pages: PropTypes.array.isRequired,
  selectedIdx: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onAddPage: PropTypes.func.isRequired,
  onAddPageEnd: PropTypes.func.isRequired,
  onReorder: PropTypes.func.isRequired,
};

export default PageNavigationBar;