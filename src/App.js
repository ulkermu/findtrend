import Navbar from "./components/Navbar";
import Header from "./components/Header";
import NewTab from "./components/NewTab";
import HowItWork from "./components/HowItWork";
import Partners from "./components/Partners";
import AllConnect from "./components/AllConnect";
import Price from "./components/Price";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <NewTab />
      <HowItWork />
      <Partners />
      <AllConnect />
      <Price />
    </div>
  );
}

export default App;
