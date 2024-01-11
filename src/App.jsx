import './app.scss';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact'
import Test from './Test'

const App = () => {
  return <div>
    <section id='Home'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type='services'/></section>
    <section><Services/></section>
    <section id='Projects'><Parallax type='project'/></section>
    
    <Project/>

    <section id='Contact'>
      <Contact/>
    </section>
    
    {/* <Test/>
    <Test/>
    <Test/>
    <Test/>
    <Test/> */}

  </div>;
};

export default App;