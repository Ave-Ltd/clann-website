import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    if (email === "newclub" && password === "joinclann") {
      localStorage.setItem("user-auth-token", "mock-club-token");
      setRole("club");
      navigate("/club");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-foreground">Login</h1>
      <p className="text-muted-foreground mt-2">Access your Clann club account</p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-1/2 mx-auto p-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:bg-background dark:text-foreground"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-1/2 mx-auto p-2 border rounded-md mt-4 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:bg-background dark:text-foreground"
        />

        {error && <p className="text-red-500 mt-3">{error}</p>}

        <Button className="mt-6 w-1/2" onClick={handleLogin}>
          Login
        </Button>

        <p className="mt-4 text-foreground">
          Don't have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>

        <Button
          className="mt-6 w-1/2"
          variant="outline"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </Button>
      </div>
    </section>
  );
};
