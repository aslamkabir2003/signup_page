type Props = {
  label?: string;
  type?: string;
  placeholder?: string;
};

export default function Input({ label, type = "text", placeholder }: Props) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
