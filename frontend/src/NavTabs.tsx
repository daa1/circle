import "@fremtind/jkl-tabs/tabs.min.css";
import { Tab, Tabs, TabList, TabPanel } from "@fremtind/jkl-tabs-react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Visualisering from "./components/Visualisering";
import '@fremtind/jkl-core/core.min.css';

function NavTabs() {
  return (
    <Tabs>
      <TabList aria-label="tabs" className="jkl-spacing-xl--bottom">
        <Tab>Home</Tab>
        <Tab>Dashboard</Tab>
        <Tab>Visualisering</Tab>
      </TabList>

      <TabPanel>
        <Home />
      </TabPanel>

      <TabPanel>
        <Dashboard />
      </TabPanel>

      <TabPanel>
        <Visualisering />
      </TabPanel>
    </Tabs>
  );
}

export default NavTabs;
