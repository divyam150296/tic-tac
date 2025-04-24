// import logo from './logo.svg';
import './index.css';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

import TictocGame from './components/TictocGame.jsx'
import TimerGame from './components/TimerGame.jsx'
import MainLayout from './components/MainLayout.jsx'
import ErrorPage from './components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: '/game',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: 'ticTac', element: <TictocGame />},
      { path: 'timerGame', element: <TimerGame /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}
 
export default App;
