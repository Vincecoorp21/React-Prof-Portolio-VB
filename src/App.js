import './App.css';
import About from './components/About/About';
import Color from './components/Color/Color';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Header name='1.0' />
      <About />
      {/* <Color /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
