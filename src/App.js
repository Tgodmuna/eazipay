import './App.css';
import DashboardCard from './components/Dashboard/Cards';
import DBHolder from './components/Dashboard/DBHolder'
import DBLeftcard from './components/Dashboard/DBLeftcard';
import FinancialDashboard from './components/Dashboard/FinancialDB';
import SearchBar from './components/Dashboard/RecentSearchBTN';

function App() {
  return (
    <div className='App'>
      <FinancialDashboard/> 
     {/* <DashboardCard/> */}
    </div>
  );
}

export default App;
