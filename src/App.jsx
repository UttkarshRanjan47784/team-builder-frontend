import React from 'react'
import { ThemeProvider } from './components/theme-provider'
import NavBar from './components/NavBar'
import DisplayAll from './components/DisplayAll'
import {useSelector} from 'react-redux'
import HomePage from './components/pages/HomePage'
import FilterPage from './components/pages/FilterPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  
  const head = useSelector(state => state.headTitle)

  return (
    <ThemeProvider >
      <BrowserRouter >
          <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}  />
          <Route path='/filter' element={<FilterPage />}  />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}


// {head == "Find People"? <div>Search</div> : null}
// {head == "Filter" ? <FilterSection /> : null}
// {head == "Teams"? <div>Teams</div> : null}