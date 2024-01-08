import Header from "./Header";
import { BlogDB } from "../resources/BlogDB";
import "../styles/Blog.css";
export const BlogInfo = () => {
  return (
    <>
      <Header />
      <div className="mainblog">
        <div className="toDisplayBlogTitle">
          <h1>BLOG</h1>
        </div>
        {BlogDB.map((val: any) => (
          <div className="blog">
            <div className="blogimg">
              <img src={val.Poster} alt="" height={300} />
            </div>
            <div className="blogcon">
              <h1>{val.type}</h1>
              <h2>{val.title}</h2>
              <p>{val.description}</p>
              <p>{val.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
