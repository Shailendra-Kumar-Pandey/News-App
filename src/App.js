import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state ={
    progress: 0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
    render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general"  lang="hi"/>}/>
          <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="in" category="general"  lang="hi"/>}/>
          <Route path="/world" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="world" country="in" category="world"  lang="hi"/>}/>
          <Route path="/nation" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="nation" country="in" category="nation"  lang="hi"/>}/>
          <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business"  lang="hi"/>}/>
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology"  lang="hi"/>}/>
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"  lang="hi"/>}/>
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports"  lang="hi"/>}/>
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science"  lang="hi"/>}/>
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health"  lang="hi"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}


