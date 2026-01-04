type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90">
      {text}
    </button>
  );
}
