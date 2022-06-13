import './App.css';
import './responsive.css';
import image1 from './background_images/image1.jpg'
import image2 from './background_images/image2.jpg'
import image3 from './background_images/image3.jpg'
import image4 from './background_images/image4.jpg'
import image5 from './background_images/image5.jpg'
import React from "react";
import Header from "./components/header"

function App() {
  return (
    <div className="page-wrapper">
      <Header/>
      <div className="main" >
        <div className="image-wrapper" style={{ backgroundImage: "url("+image1+")" }}>
          <p className="txt">Hey</p>
        </div>
        <div className="image-wrapper" style={{ backgroundImage: "url("+image2+")" }}>
          <p className="txt"> Let's</p>
        </div>
        <div className="image-wrapper" style={{ backgroundImage: "url("+image3+")" }}>
          <p className="txt">Give</p>
        </div>
        <div className="image-wrapper" style={{ backgroundImage: "url("+image4+")" }}>
          <p className="txt">All</p>
        </div>
        <div className="image-wrapper" style={{ backgroundImage: "url("+image5+")" }}>
          <p className="txt">You can</p>
        </div>
    </div>  
    </div>
   
      
  );
}

export default App;
