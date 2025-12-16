import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import MovieDetail from "../pages/movieDetails";
import { LoaderProvider } from "../context/loaderContext";

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
   
  );
}

export default App;
