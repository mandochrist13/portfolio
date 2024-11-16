import React, { useState } from "react";
import Tab from "./Tabs";
import Link from "next/link";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Figma</li>
          <li>Canva</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>SRM Institute of Science & Technology, Ghaziabad</li>
          <li>Central Academy Sr. Sec. School, Alwar</li>
          <li>Chinar Public School, Alwar</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>
            NPTEL Introduction to Programming in C : Rank-(Elite-Silver){" "}
            <Link href="/documents/certificates/NPTEL.pdf" target="_blank">
              🔗
            </Link>
          </li>
          {/* Ajoutez les autres certifications ici */}
        </ul>
      ),
    },
  ];

  const selectTab = (tabId : string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      {/* Onglets de navigation */}
      <div className="flex">
        {TAB_DATA.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.id}
            selectTab={() => selectTab(tab.id)}
          >
            {tab.title}
          </Tab>
        ))}
      </div>

      {/* Contenu actif */}
      <div className="mt-4">
        {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
