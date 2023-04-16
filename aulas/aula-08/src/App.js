import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Users from "./users/Users";
import User from "./users/User";

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>

      <Route path="/user">
        <Route index element={<Users />}/>
        <Route path=":userId" element={<User/>}/>
      </Route>

    </Routes>
  );
}

export default App;
