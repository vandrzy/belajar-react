import { useState } from "react";
import BlogCard from "../components/BlogCard";
import ImageCard from "../components/ImageCard";
import MouseTracker from "../components/MouseTracker";
import useAnime from "../hooks/useAnime";
import Pagination from "../components/Pagination";

const Home = () => {
  const blog = {
    title: "Blog dummy",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!",
  };
  const [page, setPage] = useState(1);

  const { data, isError, isLoading, error } = useAnime(page);
  return (
    <div>
      <p>ini home</p>

      <BlogCard blog={blog} />
      <MouseTracker>
        {({ x, y }) => (
          <p>
            Mouse pada ({x}, {y});
          </p>
        )}
      </MouseTracker>
      {isLoading && <p>Loading ....</p>}
      {isError && <p>Error : {error?.name}</p>}
      {!isLoading && !isError && data && (
        <Pagination
          currentPage={data.pageNumber}
          totalPage={data.totalPage}
          onChangePage={setPage}
        />
      )}
      {!isLoading && !isError && data && (
        <div>
          <p>Page: {data.pageNumber}</p>
          <p>Total Page: {data.totalPage}</p>
          {data.items.map((anime) => (
            <ImageCard anime={anime} key={anime.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
