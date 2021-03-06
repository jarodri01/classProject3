import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { Route, BrowserRouter} from 'react-router-dom'
import TableList from './components/TableList'







function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <Route exact path='/' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/TableList' component={TableList}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
