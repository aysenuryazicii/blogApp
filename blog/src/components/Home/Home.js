import { useEffect, useState } from "react";
import "./Home.css";
import Navbars from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "../Posts";
import Carousels from "../Carousels";
import Footer from "../Footer/Footer";
import axios from "axios";

function Home() {
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("");
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbars />
      <Carousels />
      <div className="posts">
        <Posts />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
