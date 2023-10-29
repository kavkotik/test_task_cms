import "./App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import tabs from "./tabs.json";
import React, { Suspense, useEffect, useState } from "react";

function App() {
  const Home = React.lazy(() => import("./components/Home"));
  const Posts = React.lazy(() => import("./components/Posts"));
  const List = React.lazy(() => import("./components/List"));

  const navigate = useNavigate();

  let location = useLocation();
  const [defaultTabIndex, setDefaultTabIndex] = useState();

  useEffect(() => {
    tabs.forEach((tab) =>
      tab.path === location.pathname ? setDefaultTabIndex(tab.order) : null
    );
  }, []);

  return (
    <div className="App">
      {defaultTabIndex > -1 && (
        <Tabs defaultIndex={defaultTabIndex}>
          <TabList>
            {tabs.map((tab) => (
              <Tab onClick={() => navigate(tab.path)}>{tab.title}</Tab>
            ))}
          </TabList>
          {tabs.map((tab) => (
            <TabPanel>
              <h1 className="tab-title">{tab.title}</h1>
            </TabPanel>
          ))}
        </Tabs>
      )}

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="list" element={<List />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
