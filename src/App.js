import Header from "./components/Header"
import Footer from "./components/Footer"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Service from "./pages/Service";
import Mobile from "./pages/Mobile";
import Web from "./pages/Web";

function App() {
  return (
    <div className="App">
      <div className="max-w-screen-xl m-auto">
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/mobile" element={<Mobile/>} />
          <Route path="/web" element={<Web/>} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
