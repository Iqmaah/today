import { Routes, Route, Link } from "react-router-dom";
import { useState  } from "react";
// import { Link } from "react-router-dom"
import './App.css';
import { Toaster } from 'react-hot-toast'
import Signup1 from './pages/Auth/Signup/Signup1';
import OtpVerification from "./pages/Auth/Signup/OtpVerification";
import Welcome from "./pages/Auth/Signup/Welcome";
import Signup4 from './pages/Auth/Signup/Signup4'
import Login from './pages/Auth/Login/Login'
import Login2 from './pages/Auth/Login/Login2'
import Loginmodal from './pages/Auth/Login/Loginmodal'
import PasswordReset1 from './pages/Auth/ResetPassword/PasswordReset1'
import PasswordReset2 from './pages/Auth/ResetPassword/PasswordReset2'
import PasswordReset3 from './pages/Auth/ResetPassword/PasswordReset3'
import Dashboard from "./pages/Dashboard/Dashboard";
import Plans from "./pages/Plans/Plans";
import PlanSummary from "./pages/Plans/PlanSummary";
import CreatePlan from "./pages/Plans/CreatePlan";
import SinglePlanPage from "./pages/Plans/SinglePlanPage";
import TopUpPlanPage from "./pages/Plans/TopUpPlanPage";
import PlansWithdraw from "./pages/Plans/PlansWithdraw";
import DashboardModal from "./contexts/DashboardModal";
import TopUpBankAcc from "./pages/Plans/TopUpBankAcc";
import FundPurse from "./pages/FundPurse/FundPurse";
import Purse from "./pages/FundPurse/Purse";
import PlanPaymentMethod from "./pages/Plans/PlanPaymentMethod";
import SendMoney1 from "./pages/FundPurse/TransferFromPurse/SendMoney1";
import SendMoney2 from "./pages/FundPurse/TransferFromPurse/BankAccount/SendMoney2";
import SendMoney3 from "./pages/FundPurse/TransferFromPurse/HervestUser/SendMoney3";
import HervestUser from "./pages/FundPurse/TransferFromPurse/HervestUser/HervestUser";
import BankAccount from "./pages/FundPurse/TransferFromPurse/BankAccount/BankAccount";
import SavingsPlan from "./pages/FundPurse/TransferFromPurse/SavingsPlan";
import PursePaymentMethod from "./pages/FundPurse/PursePaymentMethod";
import Referral1 from "./pages/Referral/Referral1";
import Transactions from "./pages/Transactions/Transactions";
import Cards from "./pages/Cards/Cards";
import Banks from "./pages/Banks/Banks";
import Profile from "./pages/Profile/Profile";
import NewInvestments from "./pages/Investments/NewInvestments";
import NewInvestmentDetails from "./pages/Investments/NewInvestmentDetails";
import NewInvestmentDetails2 from "./pages/Investments/NewInvestmentDetails2";
import Investments from "./pages/Investments/Investments";
import NewInvestmentDetails3 from "./pages/Investments/NewInvestmentDetails3";




function App() {

  const [showDashboardModal, setShowDashboardModal] = useState(true);

  return (
    <>
      <DashboardModal.Provider value={ {showDashboardModal,setShowDashboardModal} }>
        <Routes>   
            <Route  path="/" element={<Signup1 />} />
            <Route  path="/OtpVerification" element={<OtpVerification />} />
            <Route  path="/Welcome" element={<Welcome />} />
            <Route  path="/Login" element={<Login />}/>
            <Route  path="/Loginmodal" element={<Loginmodal/>} />
            <Route  path="/PasswordReset1" element={<PasswordReset1 />} />
            <Route  path="/PasswordReset2" element={<PasswordReset2 />} />
            <Route  path="/PasswordReset3" element={<PasswordReset3 />} />
            <Route  path="/Dashboard" element={<Dashboard />} />
            <Route  path="/Plans" element={<Plans />} />
            <Route  path="/PlanSummary" element={<PlanSummary />} />
            <Route  path="/CreatePlan" element={<CreatePlan />} />
            <Route  path="/PlanPaymentMethod" element={<PlanPaymentMethod />} />
            <Route  path="/PursePaymentMethod" element={<PursePaymentMethod />} />
            <Route  path="/SinglePlanPage" element={<SinglePlanPage />} />
            <Route  path="/TopUpPlanPage" element={<TopUpPlanPage />} />
            <Route  path="/PlansWithdraw" element={<PlansWithdraw />} />
            <Route  path="/TopUpBankAcc" element={<TopUpBankAcc />} />
            <Route  path="/Purse" element={<Purse />} />
            <Route  path="/FundPurse" element={<FundPurse />} />
            <Route  path="/SendMoney1" element={<SendMoney1 />} />
            <Route  path="/SendMoney2" element={<SendMoney2 />} />
            <Route  path="/SendMoney3" element={<SendMoney3 />} />
            <Route  path="/BankAccount" element={<BankAccount />} />
            <Route  path="/HervestUser" element={<HervestUser />} />
            <Route  path="/SavingsPlan" element={<SavingsPlan />} />
            <Route  path="/Referral1" element={<Referral1 />} />
            <Route  path="/Transactions" element={<Transactions />} />
            <Route  path="/Cards" element={<Cards />} />
            <Route  path="/Banks" element={<Banks />} />
            <Route  path="/Profile" element={<Profile />} />
            <Route  path="/Investments" element={<Investments />} />
            <Route  path="/NewInvestments" element={<NewInvestments />} />
            <Route  path="/NewInvestmentDetails" element={<NewInvestmentDetails />} />
            <Route  path="/NewInvestmentDetails2" element={<NewInvestmentDetails2 />} />
            <Route  path="/NewInvestmentDetails3" element={<NewInvestmentDetails3 />} />
           
            {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </DashboardModal.Provider> 
      <Toaster/>
    </>
  );
}

export default App;
