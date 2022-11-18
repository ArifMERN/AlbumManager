import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { Login, Register, PageNotFound, Home } from "./pages/Index";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { currenUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (currenUser === {}) {
      return <Navigate to="/register"></Navigate>;
    }

    return children;
  };
  return <div className="App">Hello</div>;
}

export default App;
