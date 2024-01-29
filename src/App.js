
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Navi from './Component/Navbar';
import ValidForm from './Form/ValidForm'
import FormValidate from './Form/FormValidate';
import ComplaintForm from "./Complain_page.jsx";
import Footer from "./Footer_page.jsx";
function App() {
  return (
    <div className="App">
     <Home /> 
      <About />
      <Work />
      <Testimonial />
      <Navi />
      <ValidForm />
      <FormValidate />
    <ComplaintForm></ComplaintForm>
 <Footer></Footer>     
    </div>
  );
}

export default App;