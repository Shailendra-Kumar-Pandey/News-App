import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/News-App" element={<News key="general" country="in" category="general"  lang="hi"/>}/>
          <Route path="/general" element={<News key="general" country="in" category="general"  lang="hi"/>}/>
          <Route path="/world" element={<News key="world" country="in" category="world"  lang="hi"/>}/>
          <Route path="/nation" element={<News key="nation" country="in" category="nation"  lang="hi"/>}/>
          <Route path="/business" element={<News key="business" country="in" category="business"  lang="hi"/>}/>
          <Route path="/technology" element={<News key="technology" country="in" category="technology"  lang="hi"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" country="in" category="entertainment"  lang="hi"/>}/>
          <Route path="/sports" element={<News key="sports" country="in" category="sports"  lang="hi"/>}/>
          <Route path="/science" element={<News key="science" country="in" category="science"  lang="hi"/>}/>
          <Route path="/health" element={<News key="health" country="in" category="health"  lang="hi"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}


