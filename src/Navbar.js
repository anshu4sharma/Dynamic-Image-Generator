import React,{useState} from "react";
import "./App.css";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Random from './Random'
import { Breadcrumbs } from '@mui/material';
export default function Navbar(props) {
  const [title, settitle] = useState("");

  const inputEvent =(event)=>{
    settitle(event.target.value) }

  return (
    <>
      <div className="outsidebar">
        <div className="navbar">
        <img
              src="https://mintable.app/static/media/logo.448e3bcd.svg"
              alt="img"
              id="logo"
            />

             <div className="dropdownbtn">
       <a href="#">Dynamic Image Generator  </a>
            
          </div>
       <div className="outsideinput">
            <input
              type="text"
              placeholder="Enter a Word..."
              className="search_NFT"
              onChange={inputEvent}
             value={title}
            />
            <button  id="trans" ><ImageSearchIcon /></button>
            
          </div>
          <Breadcrumbs/>
        
        </div>
      </div>

      <Random title={title} />
    </>
  );
}
