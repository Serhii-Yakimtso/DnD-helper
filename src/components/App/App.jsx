import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import HomePage from ;
// import CharterSheet from "../../pages/CharterSheet/CharterSheet";
// import NotFound from "../../pages/NotFound/NotFound";
// import About from "../../pages/About/About";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CharterSheet = lazy(() =>
  import("../../pages/CharterSheet/CharterSheet")
);
const About = lazy(() => import("../../pages/About/About"));
const NotFound = lazy(() => import("../../pages/About/About"));

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Домашня сторінка</NavLink>
        <NavLink to="/chartersheet">Лист персонажа</NavLink>
        <NavLink to="/about">Про нас</NavLink>
      </nav>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chartersheet" element={<CharterSheet />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
