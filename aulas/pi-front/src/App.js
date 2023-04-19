import {Routes, Route} from "react-router-dom";
import Principal from "./components/Principal";
import NotFound from "./components/NotFound";

function App() {
  return (
  
    <Routes>

    <Route path="/">
      <Route index element={<Principal/>}/>
      
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes>
    
  );
}

export default App;
