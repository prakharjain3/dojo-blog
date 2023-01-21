// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;

//   console.log(props, blogs)

//   return (
//     <div className="blog-list">
//         <h2>{title}</h2>
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           {/* id must be unique for each item */}
//           <h2>{blog.title} </h2>
//           <p>Writtern by : {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;

const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = props.title;
  
    // console.log(props, blogs)
  
    return (
      <div className="blog-list">
          <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            {/* id must be unique for each item */}
            <h2>{blog.title} </h2>
            <p>Writtern by : {blog.author}</p>
            <button onClick={() => {handleDelete(blog.id)}}>delete blog</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;
