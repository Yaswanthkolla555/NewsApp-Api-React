
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Newscomponent  from './components/Newscomponent'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
 const pageSize=12
const apiKey=process.env.REACT_APP_NEWS_API
const [progress,setProgress]=useState(10)
// dark mode
const [mode,setMode]=useState('light')
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#282828"
  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
}
  
    return (
      <div>
        <BrowserRouter basename='/NewsApp-Api-React'>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          {/* place this in elment in route */}
        {/* <Newscomponent  setProgress={setProgress} pageSize={10} category="entertainment"/> */}
        <Route exact path='/' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"general"}  pageSize={pageSize} country={"in"} category="general"  mode={mode}/> }></Route>
        <Route exact path='/entertainment' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"entertainment"}  pageSize={pageSize} country={"in"} category="entertainment" mode={mode}/> }></Route>
        <Route exact path='/business' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"business"}  pageSize={pageSize} country={"in"} category="business" mode={mode}/> }></Route>
        <Route exact path='/sports' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"sports"}  pageSize={pageSize} country={"in"} category="sports" mode={mode}/> }></Route>
        <Route exact path='/health' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"health"}  pageSize={pageSize} country={"in"} category="health" mode={mode}/> }></Route>
        <Route exact path='/technology' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"technology"}  pageSize={pageSize} country={"in"} category="technology" mode={mode}/> }></Route>
        <Route exact path='/science' element={<Newscomponent  setProgress={setProgress} apiKey={apiKey} key={"science"}  pageSize={pageSize} country={"in"} category="science" mode={mode}/> }></Route>

        </Routes>
      </BrowserRouter>
      </div>
    )
  
}

export default App