import React from "react";
import Card from "./Card";
const Netflix = () => {
  return (
    <>
      <div className="row">
        <Card
          title="salman khan"
          desc="bollywood actors"
          img="https://static.toiimg.com/photo/79373969/79373969.jpg?v=3"
        />
        <Card
          title="rutik roshan"
          desc="bollywood actors"
          img="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2021/01/11/d5ed0832-5001-11eb-ad83-255e1243236c_image_hires_113755.jpg?itok=6PsAhoy2&v=1610336282"
        />
        <Card
          title="tiger shrof"
          desc="bollywood actors"
          img="https://static.toiimg.com/photo/79373969/79373969.jpg?v=3"
        />
        <Card
          title="nawazudin siddhiqui"
          desc="bollywood actors"
          img="https://static.toiimg.com/photo/79373969/79373969.jpg?v=3"
        />
        <Card
          title="pankaj tripathi"
          desc="bollywood actors"
          img="https://static.toiimg.com/photo/79373969/79373969.jpg?v=3"
        />
      </div>
    </>
  );
};

export default Netflix;
