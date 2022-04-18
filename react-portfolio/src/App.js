import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Socials from './Socials';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <Hero />
      <About />
      <Skills />
      <Work />
      {/* <Modal /> */}
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
