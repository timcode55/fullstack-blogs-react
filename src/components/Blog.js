import React, { useRef } from "react";
import Togglable from "./Togglable";

const Blog = ({ blog, addLikes }) => {
  const viewBlogRef = useRef(null);

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5
  };

  return (
    <div style={blogStyle}>
      {blog.title}
      <Togglable buttonLabel="View" ref={viewBlogRef}>
        <h1>{blog.title}</h1>
        <h1>{blog.url}</h1>
        <h1>Likes {blog.likes}</h1>
        <button onClick={() => addLikes(blog.likes, blog.id)}>Like</button>
        <h1>{blog.author}</h1>
      </Togglable>
    </div>
  );
};

export default Blog;
