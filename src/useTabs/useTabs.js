import { useState } from "react";

const contents = [
  { tab: "Section 1", content: "I'm section 1" },
  { tab: "Section 2", content: "I'm section 2" },
];

export const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function App() {
  const { currentItem, changeItem } = useTabs(1, contents);
  return (
    <div className="App">
      <h1>Hello</h1>
      {contents.map((section, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
