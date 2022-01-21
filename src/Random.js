import React,{useState} from "react";
import "./App.css";


export default function Random(props) {



// https://source.unsplash.com/featured?banana/

const name=props.title
const image= `https://source.unsplash.com/featured?${name}/`


  return (
    <>

      <div className="container">
        <img src={image}  id="searchedimg" width="1000" height="500" />
      </div>
    </>
  );
}
