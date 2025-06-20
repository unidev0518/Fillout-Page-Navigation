import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_ITEM_STYLES } from '../../styles/pageItemStyles';

const previewStates = [
  { label: 'Active', state: 'active' },
  { label: 'Focused', state: 'focused' },
  { label: 'Default', state: 'default' },
  { label: 'Hover', state: 'hover' },
];

const StateColorPreviewPanel = ({ currentPage }) => (
  <div className="w-1/3 pr-6">
    <div className="flex flex-col gap-3">
      {previewStates.map(({ label, state }) => {
        const style = PAGE_ITEM_STYLES[state];
        return (
          <div key={label}>
            <span className="text-xs font-medium text-gray-500 mb-1 block ml-1">{label}</span>
            <div
              className={`flex items-center px-3 py-2 rounded-lg transition border border-gray-200 cursor-default ${style.container} ${style.border} ${style.ring}`}
            >
              <span className={`mr-2 ${style.icon}`}>{currentPage.icon}</span>
              <span>{currentPage.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

StateColorPreviewPanel.propTypes = {
  currentPage: PropTypes.object.isRequired,
};

export default StateColorPreviewPanel;