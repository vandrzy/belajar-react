import useTheme from "../hooks/useTheme";

const Blog = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-1 text-lg rounded bg-sky-400 dark:bg-indigo-700"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
      <div className="p-2 rounded shadow shadow-gray-300 dark:bg-indigo-700">
        <p className="text-slate-500 dark:text-white text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, amet.
        </p>
      </div>
    </div>
  );
};

export default Blog;
