import React from "react";
import Navigation from "./DBnavBar";
import WelcomeSection from "./Welcome";
import FinancialDashboard from "./FinancialDB";
import FinanceChart from "./FinanceChart";
import SearchBar from "./RecentSearchBTN";
import DashboardCard from "./Cards";

const MainContents = () => {
  return (
      <div style={{ backgroundColor: "F1F5F9" }} className='md:mx-[5rem] z-20'>
        <Navigation />
      <FinancialDashboard />
      <FinanceChart />
      <SearchBar />
      </div>
  );
};

export default MainContents;
