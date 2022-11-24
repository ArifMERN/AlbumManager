import Header from "./components/Header";
import Home from "./pages/Home";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./pages/Albums";
import AddAlbum from "./pages/AddAlbum";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/">
            <Route index path="" element={<Home />} />
            <Route path="albums" element={<Albums />} />
            <Route path="addAlbum" element={<AddAlbum />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
