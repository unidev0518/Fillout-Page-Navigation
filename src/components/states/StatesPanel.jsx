import React from 'react';
import PropTypes from 'prop-types';
import StateColorPreviewPanel from './StateColorPreviewPanel';
import SettingsPanel from './SettingsPanel';

const StatesPanel = ({
  pages,
  selectedIdx,
  onSetFirst,
  onRename,
  onCopy,
  onDuplicate,
  onDelete,
}) => (
  <div className="flex bg-gray-100 shadow p-6" style={{ width: 600, minHeight: 350 }}>
    <StateColorPreviewPanel currentPage={pages[selectedIdx]} />
    <SettingsPanel
      onSetFirst={onSetFirst}
      onRename={onRename}
      onCopy={onCopy}
      onDuplicate={onDuplicate}
      onDelete={onDelete}
    />
  </div>
);

StatesPanel.propTypes = {
  pages: PropTypes.array.isRequired,
  selectedIdx: PropTypes.number.isRequired,
  onSetFirst: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onDuplicate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StatesPanel;