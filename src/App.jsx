import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Loader, Navbar, Tech, Works, StarsCanvas} from "./components"
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">HI</div>
      <Navbar/>
      <Hero/>

    </div>
    </BrowserRouter>
  );
}

export default App
