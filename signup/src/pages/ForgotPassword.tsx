import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-primary mb-4">
        Forgot Password?
      </h2>

      <p className="text-sm mb-6 text-gray-500">
        Enter your email or phone number to receive a verification code.
      </p>

      <div className="space-y-4">
        <Input label="Email / Phone" placeholder="Email or phone number" />
        <Button text="Reset Password" />
      </div>
    </AuthLayout>
  );
}
