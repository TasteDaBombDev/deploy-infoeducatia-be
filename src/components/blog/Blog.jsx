import React, { useEffect } from "react";
import "./blog.scss";
import Post from "./components/Post";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../utils/Contact";
import Up from "../utils/Up";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import Firestore from "../utils/Firestore";
import { useState } from "react";
import { async } from "@firebase/util";

const firestore = new Firestore();

function Blog() {
  const [blog, setBlog] = useState([]);
  const getBlog = async () => {
    await firestore.sortdata("blog", "createAt", "desc").then((res) => {
      setBlog(res);
    });
  };

  useEffect(() => {
    AOS.init();
    getBlog();
  }, []);

  return (
    <>
      <img
        className="header"
        src={require("../../img/blog_banner.svg").default}
        alt=""
      />

      <div className="blog">
        {blog &&
          blog.map((bl) => (
            <Post
              dalay={300}
              data2={"fade-down"}
              ajutor={false}
              key={Math.random() * 92342423}
              data="fade-right"
              link={`/blog/${bl.id}`}
              poza={bl.images[0]}
              titlu={bl.titlu}
              text_scurt={
                bl.texts[0].length > 200
                  ? bl.texts[0].slice(0, 200) + " ..."
                  : bl.texts[0]
              }
            />
          ))}
      </div>
      <Contact />
      <Up />
    </>
  );
}

export default Blog;
