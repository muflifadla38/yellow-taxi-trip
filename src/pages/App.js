import { Routes, Route, BrowserRouter } from "react-router-dom";
import MapPage from "./Map";
import InsightPage from "./Insight";
import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-1 my-4 md:mx-8">
        <Header />

        <main id="content" className="">
          <Routes>
            <Route path="/" element={<MapPage />} />
            <Route path="/insight" element={<InsightPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
