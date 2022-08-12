import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup1 from './pages/Auth/Signup/Signup1';
import Signup2 from './pages/Auth/Signup/OtpVerification';
import Signup3 from './pages/Auth/Signup/Signup3';
import Signup4 from './pages/Auth/Signup/Signup4';
import Login from './pages/Auth/Login/Login';
import Login2 from './pages/Auth/Login/Login2';
import Loginmodal from './pages/Auth/Login/Loginmodal';
import PasswordReset1 from './pages/Auth/ResetPassword/PasswordReset1';
import PasswordReset2 from './pages/Auth/ResetPassword/PasswordReset2';
import PasswordReset3 from './pages/Auth/ResetPassword/PasswordReset3';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './shared-components/Sidebar/Sidebar';
import Plans from './pages/Plans/Plans';
import EmptyPlan from './pages/Dashboard/EmptyPlan';
import CreatePlan from './pages/Plans/CreatePlan';
import PlanSummary from './pages/Plans/PlanSummary';
import PaymentMethod from './shared-components/PaymentMethod';
import SinglePlanPage from './pages/Plans/SinglePlanPage';
import TopUpPlanPage from './pages/Plans/TopUpPlanPage';
import PlansWithdraw from './pages/Plans/PlansWithdraw';
import SavingsHistory from './shared-components/SavingsHistory';
import PlanPaymentMethod from './pages/Plans/PlanPaymentMethod';
import PursePaymentMethod from './pages/FundPurse/PursePaymentMethod';
import BankAccount from './pages/FundPurse/TransferFromPurse/BankAccount/BankAccount';
import TopUpBankAcc from './pages/Plans/TopUpBankAcc';
import MaturedSinglePlanPage from './pages/Plans/MaturedSinglePlanPage';
import Purse from './pages/FundPurse/Purse';
import Referral1 from './pages/Referral/Referral1';
import Transactions from './pages/Transactions/Transactions';
import Cards from './pages/Cards/Cards';
import Banks from './pages/Banks/Banks';
import NewInvestmentDetails from './pages/Investments/NewInvestmentDetails';
import NewInvestments from './pages/Investments/NewInvestments';
import Profile from './pages/Profile/Profile';
import NewInvestmentDetails2 from './pages/Investments/NewInvestmentDetails2';
import NewInvestmentDetails3 from './pages/Investments/NewInvestmentDetails3';
import Investments from './pages/Investments/Investments';
import OtpVerification from './pages/Auth/Signup/OtpVerification';
import Welcome from './pages/Auth/Signup/Welcome';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
