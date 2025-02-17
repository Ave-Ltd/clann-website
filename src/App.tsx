import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Investors } from "./pages/Investors";
import "./App.css";

// Authentication check
const isAuthenticated = () => !!localStorage.getItem("user-auth-token");

// Private Route Wrapper
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Login />;
};

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Landing />} />

      {/* Public Pages */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Private Investors Page */}
      {/* <Route path="/investors" element={<PrivateRoute><Investors /></PrivateRoute>} /> */}
      {/* Investors Page no auth for dev */}
      <Route path="/investors" element={<Investors />} />
    </Routes>
  );
}

export default App;
