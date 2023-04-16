import {Routes, Route} from "react-router-dom";
import Aluno from "./components/Aluno/Aluno";
import RandonUser from "./components/Random/RandonUser";
import ErrorUser from "./components/ErrorUser";

function App() {
  return (

    <Routes>

      <Route path="/">
        <Route index element={<Aluno/>}/>
        <Route path="/random" element={<RandonUser/>}/>
        <Route path="*" element={<ErrorUser/>}/>
      </Route>
    </Routes>



  );
}

export default App;
