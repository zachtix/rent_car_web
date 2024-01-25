import "@scss/components/PopularCar.scss";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Heart, GasStation, HierarchySquare3, Profile2User } from "iconsax-react";
import imgCar1 from "@assets/RecomenCar/Car_1.png";
import imgCar2 from "@assets/RecomenCar/Car_2.png";
import imgCar3 from "@assets/RecomenCar/Car_3.png";
import imgCar4 from "@assets/RecomenCar/Car_4.png";
import imgCar5 from "@assets/RecomenCar/Car_5.png";
import imgCar6 from "@assets/RecomenCar/Car_6.png";

function RecomenCar() {
  const [ cars, setCars ]= useState([
    {
      name: "All New Rush",
      type: "SUV",
      tankGas: 70,
      gear: "Manual",
      seats: 6,
      price: 72.00,
      img: imgCar1,
      heart: true
    },
    {
      name: "CR-V",
      type: "SUV",
      tankGas: 80,
      gear: "Manual",
      seats: 6,
      price: 80.00,
      img: imgCar2,
      heart: true
    },
    {
      name: "All New Terios",
      type: "SUV",
      tankGas: 90,
      gear: "Manual",
      seats: 6,
      price: 74.00,
      img: imgCar3,
      heart: false
    },
    {
      name: "CR-V",
      type: "SUV",
      tankGas: 80,
      gear: "Manual",
      seats: 6,
      price: 80.00,
      img: imgCar4,
      heart: true
    },
    {
      name: "MG ZX Exclusice",
      type: "Hatchback",
      tankGas: 70,
      gear: "Manual",
      seats: 4,
      price: 76.00,
      img: imgCar5,
      heart: false
    },
    {
      name: "New MG ZS",
      type: "SUV ",
      tankGas: 80,
      gear: "Manual",
      seats: 6,
      price: 80.00,
      img: imgCar6,
      heart: true
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      tankGas: 90,
      gear: "Manual",
      seats: 4,
      price: 74.00,
      img: imgCar5,
      heart: false
    },
    {
      name: "New MG ZS",
      type: "SUV ",
      tankGas: 80,
      gear: "Manual",
      seats: 6,
      price: 80.00,
      img: imgCar6,
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
    <div className="recomenCars">
      {cars.map((e, i)=>
        <div className="carCard" key={"recomenCar_"+i} >
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
            {/* <button className="btnRentNow">Rent Now</button> */}
            <Link className="btnRentNow" to="/payment" state={e}>Rent Now</Link>
          </div>
        </div>
      )}
    </div>
    

  )
}

export default RecomenCar