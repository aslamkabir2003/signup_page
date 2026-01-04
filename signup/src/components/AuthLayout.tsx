import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
}
