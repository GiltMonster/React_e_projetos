
import { Route, Routes } from "react-router-dom";
import NotFound from './page/NotFound';
import Todo from "./page/Todo";

function App() {

  return (
      <Routes>
        <Route path="/" index element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
}

export default App;
