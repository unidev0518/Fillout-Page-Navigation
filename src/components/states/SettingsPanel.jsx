import React from 'react';
import PropTypes from 'prop-types';

const SettingsPanel = ({
  onSetFirst,
  onRename,
  onCopy,
  onDuplicate,
  onDelete,
}) => (
  <div className="w-2/3 pl-6 border-l border-gray-200">
    <div className="mb-4 font-semibold text-gray-700">Settings</div>
    <div className="flex flex-col gap-2">
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600" onClick={onSetFirst}>
        <span>🏁</span> Set as first page
      </button>
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600" onClick={onRename}>
        <span>✏️</span> Rename
      </button>
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600" onClick={onCopy}>
        <span>📋</span> Copy
      </button>
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600" onClick={onDuplicate}>
        <span>🗂️</span> Duplicate
      </button>
      <hr className="my-2" />
      <button className="flex items-center gap-2 text-red-600 hover:text-red-800" onClick={onDelete}>
        <span>🗑️</span> Delete
      </button>
    </div>
  </div>
);

SettingsPanel.propTypes = {
  onSetFirst: PropTypes.func.isRequired,
  onRename: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onDuplicate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SettingsPanel;