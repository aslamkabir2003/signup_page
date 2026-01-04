import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-primary mb-2">Register</h2>
      <p className="text-sm mb-6 text-gray-500">
        Travel and Exploration Social Platform!
      </p>

      <div className="space-y-4">
        <Input label="Email / Phone Number" placeholder="Enter email or phone" />
        <Button text="Continue" />

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
