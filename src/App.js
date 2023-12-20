// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/alert"
// import TextForm from "./components/TextForm";

function App() {
  
  return (
    <>
      <Navbar title="TextTutils" />
      <Alert alert={alert}/> 
      <div className="container">
        {/* <TextForm heading="Enter The Text To Analyze" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
