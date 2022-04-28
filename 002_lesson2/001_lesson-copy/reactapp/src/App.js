import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
  const [car, setCar] = useState(null);

  return (
      <>
        <Form update={setCar}/>
        <Cars trigger={car}/>
      </>
  );
}

export default App;