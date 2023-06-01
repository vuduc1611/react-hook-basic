import { useFetch } from "../customize/fetch";
import "./Blog.scss";
import { Link } from "react-router-dom";
const Blog = () => {
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 9);
    console.log("Check data", newData);
  }
  return (
    <div className="blogs-container">
      {isLoading === false &&
        newData &&
        newData.length > 0 &&
        newData.map((item) => {
          return (
            <div className="single-blog" key={item.id}>
              <div className="title">{item.title}</div>
              <div className="content">{item.body}</div>
              <button>
                <Link to={`/blog/${item.id}`}> View detail</Link>
              </button>
            </div>
          );
        })}
      {isLoading === true && <div>Loading data ...</div>}
    </div>
  );
};

export default Blog;
