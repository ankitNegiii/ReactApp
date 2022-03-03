import React from "react";
import "./FirstContainer.css";
import SecondContainer from "./SecondContainer";
function FirstContainer() {
  return (
    <>
      <div className="firstMain appMain">
        <div className="firstText">
          <p>Ki Name Dhake Bolbo Tomake</p>
          <h1>We Are Consulting For Your Business Finance </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed
            facere eius quidem facilis. Velit architecto veniam vitae labore
            consequuntur?
          </p>
          <button className="firstBtn  badge bg-primary ">Start Now</button>
        </div>
        <div className="firstImg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDroujLYWBjXT5M6x1oKYbeZLhGmuVSHk-VA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      {/* first box over  */}
      <div className="secondMain appMain">
        <div className="firstText">
          <h1>We Have Many Year Experience In Consuntent Business </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed
            facere eius quidem facilis. Velit architecto veniam vitae labore
            consequuntur?
          </p>
          <button className="firstBtn badge bg-primary">Know More</button>
        </div>
        <div className="playBtn"><i className="fa-solid fa-circle-play fa-5x"></i></div>
        <div className="firstImg">
          <img
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ohCWn0E9hzgeZk_VfE7dxkvVaRp76-UJAg&usqp=CAU"
            alt=""
          />
        </div>
      </div>

      <dd className="thirdMain justify-content-around appMain ">
        
        <dl>
          <i className="fa-solid fa-share-nodes"></i>
          <span>Construct</span>
          <span className="text-muted">ion</span>
        </dl>
        <dl>
          <i className="fa-solid fa-cloud"></i>
          <span>Dummy-</span>
          <span className="text-muted">logo</span>
        </dl>
        <dl>
          <i className="fa-solid fa-glasses"></i>
          <span className="text-muted">Random</span>
          <span>logo</span>
        </dl>
        <dl>
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <span className="text-muted">Random </span>
          <span>Brand</span>
        </dl>
      </dd>
      {/* Third container  */}
      <div className="firstMain   text-center appMain">
        <div className="firstText">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed
            facere eius quidem facilis. Velit architecto veniam vitae labore
            consequuntur?
          </p>
          <p>We Are Consulting For Your Business Finance </p>
          <div  className="box  justify-content-center mt-5">
            <SecondContainer style={{marginRight: "10px"}}
              head="Financial Computing"
              img={<i className="fa-solid fa-coins fa-2x"></i>}
            />
            <SecondContainer
             
              head="Contant Marketing"
              img={<i className="fa-solid fa-bullhorn fa-2x"></i>}
            />
            <SecondContainer
              head="Finance Advice"
              img={<i className="fa-solid fa-file-invoice-dollar fa-2x"></i>}
            />
          </div>
          <button className="firstBtn bg-primary text-white">
            All Services
          </button>
        </div>
      </div>
    </>
  );
}

export default FirstContainer;
