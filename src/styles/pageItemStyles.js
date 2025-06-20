// src/styles/pageItemStyles.js
export const PAGE_ITEM_STYLES = {
    active: {
      container: 'bg-white font-semibold text-gray-900',
      icon: 'text-yellow-400',
      border: 'border-gray-200',
      ring: '',   // No ring
    },
    focused: {
      container: 'bg-white font-semibold text-gray-900',
      icon: 'text-yellow-400',
      border: 'border-gray-200',
      ring: 'ring-2 ring-blue-400', // Blue glow
    },
    default: {
      container: 'bg-gray-200 text-gray-500',
      icon: 'text-gray-400',
      border: 'border-gray-200',
      ring: '',
    },
    hover: {
      container: 'bg-gray-300 text-gray-700',
      icon: 'text-gray-400',
      border: 'border-gray-200',
      ring: '',
    },
  };