import React from 'react';
import './App.css';
import Navbar from './komponen/Navbar';
import About from './konten/About';
import Education from './konten/Education';
import Experience from './konten/Experience';
import Skills from './konten/Skills';
import Interest from './konten/Interests';
import Awards from './konten/Awards';

class App extends React.Component {
  render () {
    return <div className="App">
              <header className="header">
                <Navbar/>
              </header>
              <div className='konten'>
                <li>
                  <About/>
                  <Experience/>
                  <Education/>
                  <Skills/>
                  <Interest/>
                  <Awards/>
                </li>
              </div>
            </div>
            }
}
export default App;
