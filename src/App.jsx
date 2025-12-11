import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import MovieDetail from "../pages/movieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
