import { useState } from 'react'
import { MdClose } from "react-icons/md";
import './App.css'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import CreateAccount from './pages/create-account/CreateAccount'
import Wallet from './pages/wallet/Wallet'
import Settings from './pages/settings/Settings'
import Savings from './pages/savings/Savings'
import HelpAndSupport from './pages/help-and-support/HelpAndSupport'
import GetStarted from './pages/get-started/GetStarted'
import EarnPoints from './pages/earn-points/EarnPoints'
import History from './pages/history/History'
import Withdraw from './pages/withdraw/Withdraw'
import Deposit from './pages/deposit/Deposit'
import LeaderBoard from './pages/leader-board/LeaderBoard'
import DepositCurrency from './pages/deposit-currency/DepositCurrency'
import DepositProvider from './pages/deposit-provider/DepositProvider'
import DepositViaLink from './pages/deposit-via-link/DepositViaLink'
import WithdrawCurrency from './pages/withdraw-currency/WithdrawCurrency'
import WithdrawProvider from './pages/withdraw-provider/WithdrawProvider'
import WithdrawViaLink from './pages/withdraw-via-link/WithdrawViaLink'
import SaveAsset from './pages/save-asset/SaveAsset'
import TransactionInfo from './pages/transaction-info/TransactionInfo'
import AboutSelf from './pages/about-self/AboutSelf'
import ConfirmEmail from './pages/confirm-email/ConfirmEmail'
import Login from './pages/login/Login'
import Send from './pages/send/Send';
import Home from './pages/home/Home';

function App() {

  const baseUrl = 'https://backend-lem4.onrender.com/api'
  const API_KEY = 'GISUYDre8wt7984yupor5jp80YT%^%Rfuyih2wrk*&*^%&$^HJLIUTYDFwe576284'

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount baseUrl={baseUrl} API_KEY={API_KEY}/>} />
        <Route path="/dashboard" element={<Dashboard baseUrl={baseUrl}/>} />
        <Route path="/create-account" element={<CreateAccount baseUrl={baseUrl}/>} />
        <Route path="/deposit" element={<Deposit baseUrl={baseUrl}/>} />
        <Route path="/withdraw" element={<Withdraw baseUrl={baseUrl}/>} />
        <Route path="/history" element={<History baseUrl={baseUrl}/>} />
        <Route path="/earn-points" element={<EarnPoints baseUrl={baseUrl}/>} />
        <Route path="/get-started" element={<GetStarted baseUrl={baseUrl}/>} />
        <Route path="/help-and-support" element={<HelpAndSupport baseUrl={baseUrl}/>} />
        <Route path="/savings" element={<Savings baseUrl={baseUrl}/>} />
        <Route path="/settings" element={<Settings baseUrl={baseUrl}/>} />
        <Route path="/wallet" element={<Wallet baseUrl={baseUrl}/>} />
        <Route path="/leader-board" element={<LeaderBoard baseUrl={baseUrl}/>} />
        <Route path="/deposit-currency/:country" element={<DepositCurrency baseUrl={baseUrl}/>} />
        <Route path="/deposit-provider/:country/:provider" element={<DepositProvider baseUrl={baseUrl}/>} />
        <Route path="/deposit-via-link" element={<DepositViaLink baseUrl={baseUrl}/>} />
        <Route path="/withdraw-currency/:country" element={<WithdrawCurrency baseUrl={baseUrl}/>} />
        <Route path="/withdraw-provider/:country/:provider" element={<WithdrawProvider baseUrl={baseUrl}/>} />
        <Route path="/withdraw-via-link" element={<WithdrawViaLink baseUrl={baseUrl}/>} />
        <Route path="/save-asset/:asset" element={<SaveAsset baseUrl={baseUrl}/>} />
        <Route path="/transaction-info" element={<TransactionInfo baseUrl={baseUrl}/>} />
        <Route path="/about-self" element={<AboutSelf baseUrl={baseUrl}/>} />
        <Route path="/confirm-email" element={<ConfirmEmail baseUrl={baseUrl}/>} />
        <Route path="/login" element={<Login baseUrl={baseUrl}/>} />
        <Route path="/send" element={<Send baseUrl={baseUrl}/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
