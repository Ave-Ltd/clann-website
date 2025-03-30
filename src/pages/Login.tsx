import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Reset error
    setError("");

    if (email === "investor" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-investor-token");
      navigate("/investors");
    } else if (email === "club" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-club-token");
      navigate("/club");
    } else {
      setError("Invalid mock credentials. Try 'investor/password1' or 'club/password1'.");
    }
  };

  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <p className="text-muted-foreground mt-2">Access your Clann account</p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-1/2 mx-auto p-2 border rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-1/2 mx-auto p-2 border rounded-md mt-4 focus:outline-none"
        />

        {error && <p className="text-red-500 mt-3">{error}</p>}

        <Button className="mt-6 w-1/2" onClick={handleLogin}>
          Login
        </Button>

        <p className="mt-4">
          Don't have an account?{" "}
          <span className="text-primary cursor-pointer" onClick={() => navigate("/register")}>
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
