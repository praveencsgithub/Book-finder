import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-5xl px-6">
        <Routes>
        <Route path="/"element={ <> <Hero /> </>} />
        <Route path="search/:key" element={<Search />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
