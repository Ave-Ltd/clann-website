import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAssociation } from "../context/AssociationContext";

export const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useAuth();
  const { setAssociation } = useAssociation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleLogin = () => {
    setError("");

    if (email === "club" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-club-token");
      setRole("club");
      navigate("/club");
    } else if (email === "football" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-football-token");
      setRole("football");
      setAssociation("football");
      navigate("/investors");
    } else if (email === "rugby" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-rugby-token");
      setRole("rugby");
      setAssociation("rugby");
      navigate("/investors");
    } else if (email === "kickboxing" && password === "password1") {
      localStorage.setItem("user-auth-token", "mock-kickboxing-token");
      setRole("kickboxing");
      setAssociation("kickboxing");
      navigate("/investors");
    } else {
      setError(
        "Invalid mock credentials. Try: club/password1, football/password1, rugby/password1, or kickboxing/password1."
      );
    }
  };

  const handleRoleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const role = e.target.value;
    setSelectedRole(role);

    if (role === "club") {
      setEmail("club");
    } else if (["football", "rugby", "kickboxing"].includes(role)) {
      setEmail(role);
    } else {
      setEmail("");
    }

    setPassword("password1");
  };

  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-foreground">Login</h1>
      <p className="text-muted-foreground mt-2">Access your Clann account</p>

      <div className="mt-6">
        <div className="block w-1/2 mx-auto mb-4 text-left">
          <label className="block mb-2 text-sm font-medium">Select mock user</label>
          <select
            value={selectedRole}
            onChange={handleRoleSelect}
            className="w-full p-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:bg-background dark:text-foreground"
          >
            <option value="">-- Choose a role --</option>
            <option value="club">Club</option>
            <option value="football">Football Investor</option>
            <option value="rugby">Rugby Investor</option>
            <option value="kickboxing">Kickboxing Investor</option>
          </select>
        </div>

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
