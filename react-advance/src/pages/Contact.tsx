import { useMemo, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    // digunakan untuk menyimpan hasil perhitungan agar tidak dihitung ulang setiap render.
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>ini Contact</p>
      <button
        className="bg-sky-500 p-2 text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        update
      </button>
      <h1>{result}</h1>
    </div>
  );
};

export default Contact;
