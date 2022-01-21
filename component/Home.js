import React from "react";
import Card from "./Card";
import NftCard from "./NftCard";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <>
      <div className="banner">
        <span className="onboard">
          Trade NFTs faster and without any fees with Immutable X!{" "}
          <span className="onboardhighlight"> Click here </span> to learn more.
        </span>
      </div>

{/* carosuel */}


<Carousel/>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="HomePage_redBox__3yISZ"></div>
        <h2 className="HomePage_title__397xY">Top Collections</h2>
      </div>
      <div>
        <div className="cardflex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
        <div className="HomePage_redBox__3yISZ"></div>
        <h2 className="HomePage_title__397xY">Trending NFTs</h2>
      </div>
<div className="cardflex">

<NftCard/>
<NftCard/>
<NftCard/>
<NftCard/>
</div>
<div className="bannerimg">

<img src="https://d3luz8cn6n4wh0.cloudfront.net/home_images/SELLERS+UNIVERSITY+-+Banner.png" alt="lat" />
</div>

    </>
  );
}
