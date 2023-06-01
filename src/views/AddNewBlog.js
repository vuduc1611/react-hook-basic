import "./Blog.scss";
import { useState } from "react";
const AddNewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmitButton = () => {
    console.log("Here ", title, content);
  };
  return (
    <div className="add-new-container">
      <div className="text-add-new">--Add new Blog</div>
      <div className="inputs-data">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="inputs-data">
        <label>Content: </label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button className="btn-add-new" onClick={handleSubmitButton}>
        Submit
      </button>
    </div>
  );
};
export default AddNewBlog;
