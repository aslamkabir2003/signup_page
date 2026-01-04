import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-primary mb-2">Sign In</h2>
      <p className="text-sm mb-6 text-gray-500">
        Travel and Exploration Social Platform!
      </p>

      <div className="space-y-4">
        <Input label="Email / Phone Number" placeholder="Enter email or phone" />
        <Input label="Password" type="password" placeholder="Password" />

        <div className="text-right text-sm text-primary">
          <Link to="/forgot">Forgot?</Link>
        </div>

        <Button text="Sign In" />

        <p className="text-center text-sm">
          New to Provelers ?{" "}
          <Link to="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
