import Login from './components/login'
import Signup from './components/signup'
import ForgotPassword from './components/forgotPassword'
import Dashboard from './components/dashboard'
import NewTicket from './components/newTicket'
import MyTickets from './components/myTickets'
import Profile from './components/profile'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot' element={<ForgotPassword />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/newticket' element={<NewTicket />}/>
        <Route path='/myticket' element={<MyTickets />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
