import React from "react";
import Navigation from "./DBnavBar";
import FinancialDashboard from "./FinancialDB";
import FinanceChart from "./FinanceChart";
import SearchBar from "./RecentSearchBTN";
import DashboardCard from "./Cards";
import MobileQuickCard from "./MobileQuickCard";

const MainContents = () => {
  return (
    <div
      style={{ backgroundColor: "F1F5F9" }}
      className='md:mx-[5rem] w-full z-20'>
      <Navigation />
      <FinancialDashboard />
      <MobileQuickCard />
      <FinanceChart />
      <SearchBar />
      <DashboardCard />
    </div>
  );
};

export default MainContents;
