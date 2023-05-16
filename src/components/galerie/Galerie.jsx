import AOS from "aos";
import "aos/dist/aos.css";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import Contact from "../utils/Contact";
import Firestore from "../utils/Firestore";
import Up from "../utils/Up";
import "./blog.scss";
import Post from "./components/Post";
import banner from "../../img/blog_banner.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Preview from "./components/Preview";

import Datas from './components/Datas'

// const firestore = new Firestore();

function Galerie() {
  // const [blog, setBlog] = useState([]);
  // const getBlog = async () => {
  //   await firestore.sortdata("blog", "createAt", "desc").then((res) => {
  //     setBlog(res);
  //   });
  // };

  const datas = new Datas;

  useEffect(() => {
    AOS.init();
    // getBlog();
  }, []);



  return (
    <>
      <Post sezon={1}  />
      <Post sezon={2} />
      <Post sezon={3} />
      <Post sezon={4} />
      <Post sezon={5} />
      <Post sezon={6} />
      {/* <Preview /> */}
    </>
  )

  // return (
  //   <>
  //     <LazyLoadImage
  //       src={banner}
  //       width={"100vw"}
  //       height={"auto"}
  //       className="header"
  //     />

  //     <div className="blog">
  //       {blog &&
  //         blog.map((bl) => (
  //           <Post
  //             dalay={300}
  //             data2={"fade-down"}
  //             ajutor={false}
  //             key={Math.random() * 92342423}
  //             data="fade-right"
  //             link={`/blog/${bl.id}`}
  //             poza={bl.images[0]}
  //             titlu={bl.titlu}
  //             text_scurt={
  //               bl.texts[0].length > 200
  //                 ? bl.texts[0].slice(0, 200) + " ..."
  //                 : bl.texts[0]
  //             }
  //           />
  //         ))}
  //     </div>
  //     <Contact />
  //     <Up />
  //   </>
  // );
}

export default Galerie;
