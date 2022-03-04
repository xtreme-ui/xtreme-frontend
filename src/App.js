import React from "react";
import AssetsTab from '@bit/xtreme-ui.assets-tab.assets-tab';
import TopBar from "@bit/xtreme-ui.top-bar.top-bar";
import StockBar from "@bit/xtreme-ui.top-bar.stock-bar";
import Accounts from "@bit/xtreme-ui.react.accounts";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        <TopBar />
        <StockBar />
      </div>
      <div className="clientPerformance">
        <Accounts className="accounts" profileId={789}/>
        <AssetsTab />
      </div>
    </div>
  );
}

export default App;
