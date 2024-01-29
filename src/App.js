import logo from './logo.svg';
import './App.css';
import Navi from './Component/Navbar';
import ValidForm from './Form/ValidForm'
import FormValidate from './Form/FormValidate';
function App() {
  return (
    <div className="App">
      <Navi />
      <ValidForm />
      <FormValidate />
    </div>
  );
}

export default App;
