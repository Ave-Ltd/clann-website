import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // ✅ Mock authentication - store a fake token
    localStorage.setItem("user-auth-token", "mock-token");

    // ✅ Redirect to Investors Dashboard (for dev testing)
    navigate("/investors");
  };

  return (
    <section className="container mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <p className="text-muted-foreground mt-2">Access your Clann account</p>

      {/* Form Placeholder */}
      <div className="mt-6">
        <input
          type="email"
          placeholder="Email"
          className="block w-1/2 mx-auto p-2 border rounded-md focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-1/2 mx-auto p-2 border rounded-md mt-4 focus:outline-none"
        />

        {/* ✅ Mock Login Button - Navigates to Investors Page */}
        <Button className="mt-6 w-1/2" onClick={handleLogin}>
          Login
        </Button>

        <p className="mt-4">
          Don't have an account?{" "}
          <span className="text-primary cursor-pointer" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>

        {/* ✅ Back to Home Button */}
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
