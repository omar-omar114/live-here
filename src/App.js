
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Steps from './components/Steps/Steps';
import AdsList from './components/ads-list/AdsList';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Description/>
      <Steps/>
      <AdsList/>
      <Footer/>
    </div>
  );
}

export default App;
