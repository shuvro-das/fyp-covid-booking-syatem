import React from "react";

function HomeScrren() {
  const onclickhandler = (props) => {
    window.location.href = `/booking`;
  };
  return (
    <div>
      <div className="homeimage">
        <img src="images/banner-4.png" alt="homeimage" />
      </div>
      <div className="home-2nddiv">
        <h1>Winning over COVID-19 </h1>

        <button className="primary" onClick={onclickhandler}>
          Book Vaccine Now
        </button>
      </div>
    </div>
  );
}

export default HomeScrren;
