import { useState } from 'react';

const initialPages = [
  { name: 'Info', icon: '🛈' },
  { name: 'Details', icon: '📄' },
  { name: 'Other', icon: '📄' },
  { name: 'Ending', icon: '✔️' },
];

export default function usePages() {
  const [pages, setPages] = useState(initialPages);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const addPage = (afterIdx) => {
    const newPage = { name: `Page ${pages.length + 1}`, icon: '📄' };
    const newPages = [...pages];
    newPages.splice(afterIdx + 1, 0, newPage);
    setPages(newPages);
    setSelectedIdx(afterIdx + 1);
  };

  const addPageEnd = () => {
    const newPage = { name: `Page ${pages.length + 1}`, icon: '📄' };
    setPages([...pages, newPage]);
    setSelectedIdx(pages.length);
  };

  const reorder = (fromIdx, toIdx) => {
    if (fromIdx === toIdx) return;
    const newPages = [...pages];
    const [moved] = newPages.splice(fromIdx, 1);
    newPages.splice(toIdx, 0, moved);
    setPages(newPages);
    if (selectedIdx === fromIdx) setSelectedIdx(toIdx);
    else if (fromIdx < selectedIdx && toIdx >= selectedIdx) setSelectedIdx(selectedIdx - 1);
    else if (fromIdx > selectedIdx && toIdx <= selectedIdx) setSelectedIdx(selectedIdx + 1);
  };

  const setFirst = () => {
    if (selectedIdx === 0) return;
    const newPages = [...pages];
    const [page] = newPages.splice(selectedIdx, 1);
    newPages.unshift(page);
    setPages(newPages);
    setSelectedIdx(0);
  };

  const rename = () => {
    const newName = prompt('Enter new name:', pages[selectedIdx].name);
    if (newName) {
      const newPages = [...pages];
      newPages[selectedIdx].name = newName;
      setPages(newPages);
    }
  };

  const copy = () => {
    const newPages = [...pages];
    newPages.splice(selectedIdx + 1, 0, { ...pages[selectedIdx], name: pages[selectedIdx].name + ' Copy' });
    setPages(newPages);
    setSelectedIdx(selectedIdx + 1);
  };

  const duplicate = () => {
    const newPages = [...pages];
    newPages.push({ ...pages[selectedIdx], name: pages[selectedIdx].name + ' Duplicate' });
    setPages(newPages);
    setSelectedIdx(newPages.length - 1);
  };

  const remove = () => {
    if (pages.length === 1) return;
    const newPages = pages.filter((_, idx) => idx !== selectedIdx);
    setPages(newPages);
    setSelectedIdx(Math.max(0, selectedIdx - 1));
  };

  const updatePage = (idx, data) => {
    setPages(pages => {
      const newPages = [...pages];
      newPages[idx] = { ...newPages[idx], ...data };
      return newPages;
    });
  };

  const activePanelChange = (idx, option) => {
    setPages(pages => {
      const newPages = [...pages];
      newPages[idx] = { ...newPages[idx], name: option.name };
      return newPages;
    });
  };

  return {
    pages,
    selectedIdx,
    setSelectedIdx,
    addPage,
    addPageEnd,
    reorder,
    setFirst,
    rename,
    copy,
    duplicate,
    remove,
    updatePage,
    activePanelChange,
  };
}