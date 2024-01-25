import "@scss/components/PopularCar.scss";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Heart, GasStation, HierarchySquare3, Profile2User } from "iconsax-react";
import imgCar1 from "@assets/PopularCar/Car_1.png";
import imgCar2 from "@assets/PopularCar/Car_2.png";
import imgCar3 from "@assets/PopularCar/Car_3.png";

function PopularCar() {
  const [ cars, setCars ]= useState([
    {
      name: "Koenigsegg",
      type: "Sport",
      tankGas: 90,
      gear: "Manual",
      seats: 2,
      price: 99.00,
      img: imgCar1,
      heart: true
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      tankGas: 80,
      gear: "Manual",
      seats: 2,
      price: 80.00,
      img: imgCar2,
      heart: false
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      tankGas: 70,
      gear: "Manual",
      seats: 4,
      price: 96.00,
      img: imgCar3,
      heart: true
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      tankGas: 80,
      gear: "Manual",
      seats: 2,
      price: 80.00,
      img: imgCar2,
      heart: false
    }
  ])
  const toggleHeart = (id)=>{
    setCars((prevCars) =>
      prevCars.map((car, index) =>
        index == id
          ? { ...car, heart: car.heart? false:true }
          : car
      )
    );
  }
  return(
    <div className="popularCars">
      {cars.map((e, i)=>
        <div className="carCard" key={"popularCar_"+i} >
          <div className="titleCard">
            <div className="content">
              <h3>{e.name}</h3>
              <p>{e.type}</p>
            </div>
            <div className="btnHeart">
              <Heart size="24" color={e.heart? "#ED3F3F":"#90A3BF"} variant={e.heart? "Bold":"Linear"} onClick={(e)=>toggleHeart(i)} />
            </div>
          </div>
          <img src={e.img} alt="" className="imgCard" />
          <div className="detailCard">
            <p>
              <GasStation size="24" variant="Bold" />
              {e.tankGas}L
            </p>
            <p>
              <HierarchySquare3 size="24" variant="Bold" />
              {e.gear}
            </p>
            <p>
              <Profile2User size="24" variant="Bold" />
              {e.seats} Seat
            </p>
          </div>
          <div className="priceCard">
            <h3 className="price">
              ${e.price.toFixed(2)}/<span>day</span>
            </h3>
            <Link className="btnRentNow" to="/payment" state={e}>Rent Now</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default PopularCar