import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario")
  const title = "All Blogs";
  //   const secondtitle = "Mario's Blogs";

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs)
  }

  useEffect (() => {
    console.log("use effect ran");
    console.log(name)
  }, [name]) // [] if want to run the fucntion only once

  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} handleDelete={handleDelete} />
<button onClick={() => setName("luigi")}>Change Name</button>
<p>{name}</p>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title={secondtitle} /> */}
    </div>
  );
};

export default Home;
