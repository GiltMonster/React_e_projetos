import ThemeProvider from "./ThemeProvider";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="container">
      <header className="">
        <ThemeProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
