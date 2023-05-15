import React from "react";
import { Link } from "react-router-dom";

import post_card_img from "../../../img/post_card_img.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Preview from "./Preview";

function Post({
  // ajutor,
  // poza,
  // deleted,
  // titlu,
  // link,
  // data,
  // data2,
  // dalay,
  // text_scurt,
  sezon
}) {

  const titlu = "DADA"
  const text_scurt = "nu scriue as dads"
  const link = "mata  "
  
  return (
    <>
      <div className="post" style={{ height: "auto" }}>
        <div className="img" style={{height: "400px", width: "450"}} >
          {/* <LazyLoadImage src={poza} className="poza_main" width={"100%"} height={"100%"} />
          <LazyLoadImage src={post_card_img} className="svg" width={"100%"} height={"auto"} /> */}
          <Preview sezon={sezon}/>
        </div>
        <div className="text">
          <div className="title">
            <h2>{titlu}</h2>
            <div className="linie"></div>
          </div>
          <div className="para">
            <div className="linie_vert"></div>
            <p>{text_scurt}</p>
          </div>
          <Link to={link} preventScrollReset={true} className="link">
            <div className="coca"></div>
            <span>
              Citeste mai multe <i className="fas fa-caret-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Post;
