import React from "react";
import icon1 from "../Assets/img1.png";
import icon2 from "../Assets/img2.png";
import icon3 from "../Assets/img3.png";

const Work = () => {
  const workInfoData = [
    {
      image: icon1,
      title: "PROMOTE LEADERSHIP among students",
    },
    {
      image: icon2,
      title: "By involving student to real world problems",
    },
    {
      image: icon3,
      title: "Helping students by engaging them",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Features</h1>
        <p className="primary-text">
          The Student Council can actively contribute to the development of
          college policy in a wide range of areas such as bullying, uniform
          requirements, behaviour code and extra-curricular activities.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
