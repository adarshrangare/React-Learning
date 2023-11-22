import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './Component/Counter.jsx'
import LoginForm from './Component/LoginForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Counter />
    <App/>
    <LoginForm/>
    </>
  // </React.StrictMode>,
)
