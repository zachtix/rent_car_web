import { useState, useEffect } from "react"
import { Link, NavLink } from 'react-router-dom';
import Filter from "@components/Filter";
import "@scss/pages/Category.scss";
import { Heart, GasStation, HierarchySquare3, Profile2User } from "iconsax-react";
import imgCarTop1 from "@assets/PopularCar/Car_1.png";
import imgCarTop2 from "@assets/PopularCar/Car_2.png";
import imgCarTop3 from "@assets/PopularCar/Car_3.png";
import imgCar1 from "@assets/RecomenCar/Car_1.png";
import imgCar2 from "@assets/RecomenCar/Car_2.png";
import imgCar3 from "@assets/RecomenCar/Car_3.png";
import imgCar4 from "@assets/RecomenCar/Car_4.png";
import imgCar5 from "@assets/RecomenCar/Car_5.png";
import imgCar6 from "@assets/RecomenCar/Car_6.png";

function Category() {
  const [ filter, setFilter ] = useState({
    type: "all",
    capacity: "all",
    price: 100
  })
  const [ cars, setCars ]= useState([
    {
      name: "Koenigsegg",
      type: "Sport",
      tankGas: 90,
      gear: "Manual",
      seats: 2,
      price: 99.00,
      img: imgCarTop1,
      heart: true
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      tankGas: 80,
      gear: "Manual",
      seats: 2,
      price: 80.00,
      img: imgCarTop2,
      heart: false
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      tankGas: 70,
      gear: "Manual",
      seats: 4,
      price: 96.00,
      img: imgCarTop3,
      heart: true
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      tankGas: 80,
      gear: "Manual",
      seats: 2,
      price: 80.00,
      img: imgCarTop2,
      heart: false
    },
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
  const toggleHeart = (index)=>{
    setCars((prevCars) =>
      prevCars.map((car, i) =>
        i == index
          ? { ...car, heart: car.heart? false:true }
          : car
      )
    );
  }
  const carCard = (e, i)=>{
    const typeCondition = filter.type === "all" || e.type.toLowerCase() === filter.type;
    const capacityCondition = filter.capacity === "all" || e.seats === parseInt(filter.capacity);
    const priceCondition = e.price <= filter.price;
    const returnElement = ()=>{
      return(
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
            <Link className="btnRentNow" to="/payment" state={e}>Rent Now</Link>
          </div>
        </div>
      )
    }
    if(typeCondition&&capacityCondition&&priceCondition) {
      return returnElement()
    }
  }
  useEffect(() => {
  }, [filter]);
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return(
    <div className="category" >
      <div className="container">
        <Filter HandleFilter={(data)=>setFilter(data)} />
        <div className="carsContainer">
        {
          cars.map((e, i)=>
            carCard(e, i)
          )
        }
        {/* {cars.map((e, i)=>
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
              <Link className="btnRentNow" to="/payment">Rent Now</Link>
            </div>
          </div>
        )} */}
        </div>
      </div>
    </div>
  )
}

export default Category