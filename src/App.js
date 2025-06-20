import React from "react";
import usePages from "./hooks/usePages";
import PageNavigationBar from "./components/navigation/PageNavigationBar";
import StatesPanel from "./components/states/StatesPanel";

function App() {
  const {
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
  } = usePages();

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <div className="mb-8 pl-12 pt-12">
        <PageNavigationBar
          pages={pages}
          selectedIdx={selectedIdx}
          onSelect={setSelectedIdx}
          onAddPage={addPage}
          onAddPageEnd={addPageEnd}
          onReorder={reorder}
        />
      </div>
      <div className="pl-12">
        <StatesPanel
          pages={pages}
          selectedIdx={selectedIdx}
          onSelect={setSelectedIdx}
          onSetFirst={setFirst}
          onRename={rename}
          onCopy={copy}
          onDuplicate={duplicate}
          onDelete={remove}
          onActivePanelChange={activePanelChange}
        />
      </div>
    </div>
  );
}

export default App;
