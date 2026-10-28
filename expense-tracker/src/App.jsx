import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Expense } from './pages/Expense/Expense.jsx'
import { Dashboard } from './pages/Dashboard/Dashboard.jsx'
import { AddExpense } from './pages/AddExpense/Addexpense.jsx'
import { Settings } from './pages/Settings/Settings.jsx'
import { useEffect, useState } from 'react'
import './App.css'


function App() {
    const [expenses, setExpenses] = useState(() => {
      try {
        const savedExpenses = localStorage.getItem('expenses')
        const parsedExpenses = savedExpenses ? JSON.parse(savedExpenses) : []
        return Array.isArray(parsedExpenses) ? parsedExpenses : []
      } catch {
        return []
      }
    })

    useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} setExpenses={setExpenses}/>} />
        <Route path="/expenses" element={<Expense expenses={expenses} setExpenses={setExpenses}/>} />
        <Route path="/add-expense" element={<AddExpense expenses={expenses} setExpenses={setExpenses}/>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
