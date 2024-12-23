import React, { useState } from "react";

const CustomTabs = () => {
  // Active Tab State
  const [activeTab, setActiveTab] = useState(0); // Default Tab (0 = First Tab)

  // Data for each tab
  const tabContent = [
    { title: "Tab 1", content: "This is the content for Tab 1." },
    { title: "Tab 2", content: "This is the content for Tab 2." },
    { title: "Tab 3", content: "This is the content for Tab 3." },
    { title: "Tab 4", content: "This is the content for Tab 4." },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Custom Tabs</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-4">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} // Set Active Tab
            className={`px-4 py-2 mx-2 border-b-2 ${
              activeTab === index
                ? "border-blue-500 text-blue-500 font-bold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-center p-6 border rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {tabContent[activeTab].title}
        </h2>
        <p>{tabContent[activeTab].content}</p>
      </div>
    </div>
  );
};

export default CustomTabs;
