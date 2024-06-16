import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/history" element={<History />} />
        <Route path="/earn-points" element={<EarnPoints />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/help-and-support" element={<HelpAndSupport />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/leader-board" element={<LeaderBoard />} />
        <Route path="/deposit-currency/:country" element={<DepositCurrency />} />
        <Route path="/deposit-provider/:country/:provider" element={<DepositProvider />} />
        <Route path="/deposit-via-link" element={<DepositViaLink />} />
        <Route path="/withdraw-currency/:country" element={<WithdrawCurrency />} />
        <Route path="/withdraw-provider/:country/:provider" element={<WithdrawProvider />} />
        <Route path="/withdraw-via-link" element={<WithdrawViaLink />} />
        <Route path="/save-asset/:asset" element={<SaveAsset />} />
        <Route path="/transaction-info" element={<TransactionInfo />} />
        <Route path="/about-self" element={<AboutSelf />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
