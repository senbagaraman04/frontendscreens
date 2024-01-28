import "./App.css";
import Header from "./Components/Header";
import Basic from "./Components/Basic";
import Professional from "./Components/Professional";
import Master from "./Components/Master";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [basicPrice, setBasicPrice] = useState(199.99);
  const [proPrice, setProPrice] = useState(249.99);
  const [masterPrice, setMasterPrice] = useState(399.99);

  function handleChange() {
    setIsChecked(!isChecked);
    console.log(!isChecked);

    if (!isChecked) {
      setBasicPrice(19.99);
      setProPrice(24.99);
      setMasterPrice(39.99);
    } else {
      setBasicPrice(199.99);
      setProPrice(249.99);
      setMasterPrice(399.99);
    }
  }

  return (
    <div className="container">
      <main>
        <Header isChecked={isChecked} handleChange={handleChange} />
        <div className="app__section-group">
          <Basic price={basicPrice} />
          <Professional price={proPrice} />
          <Master price={masterPrice} />
        </div>
      </main>
    </div>
  );
}

export default App;