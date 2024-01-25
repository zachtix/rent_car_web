import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import "@scss/pages/Payment.scss";
import { Location, SecuritySafe } from "iconsax-react";
import imgCar1 from "@assets/PopularCar/Car_1.png";
import imgBTC from "@assets/Payment/Bitcoin.png";
import imgMC from "@assets/Payment/MasterCard.png";
import imgVS from "@assets/Payment/Visa.png";
import imgPP from "@assets/Payment/PayPal.png";

function Payment({ car }) {
  // const [dataCar, setDataCar] = useState({
  //   name: "Koenigsegg",
  //   type: "Sport",
  //   tankGas: 90,
  //   gear: "Manual",
  //   seats: 2,
  //   price: 99.00,
  //   img: imgCar1,
  //   heart: true
  // })
  const location = useLocation();
  const additionalProps = location.state;
  const [ dataCar, setDataCar ] = useState(additionalProps)
  // console.log(additionalProps);
  const [ promoCode, setPromoCode ] = useState("")
  const [ paymentData, setPaymentData ] = useState({
    bill: {
      name: "",
      phone: "",
      address: "",
    },
    rental: {
      pickUp: {
        location: "",
        date: "",
        time: ""
      },
      dropOff: {
        location: "",
        date: "",
        time: ""
      }
    },
    payment: {
      method: "",
      visa: {
        cardNumber: "",
        cardExp: "",
        cardHolder: "",
        cv: ""
      }
    }
  })
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const [ paymentMethod, setPaymentMethod ] = useState('visa')
  const handlePaymentDataBill = (e)=> {
    const { name, value } = e.target;
    setPaymentData((prevItem) => ({
      ...prevItem,
      bill: {
        ...prevItem.bill,
        [name]: value,
      }
    }));
  }
  const handlePaymentDataRental = (e)=> {
    const { name, value, id } = e.target;
    console.log(e);
    setPaymentData((prevItem) => ({
      ...prevItem,
      rental: {
        ...prevItem.rental,
        [id=="pickUp"? "pickUp":"dropOff"]: {
          ...prevItem.rental[id=="pickUp"? "pickUp":"dropOff"],
          [name]: value,
        }
      }
    }));
  }
  const handlePaymentMethodData = (e)=> {
    const { name, value } = e.target;
    setPaymentData((prevItem) => ({
      ...prevItem,
      payment: {
        ...prevItem.payment,
        visa: {
          ...prevItem.payment.visa,
          [name]: value,
        }
      }
    }));
  }
  return(
    <div className="paymentContainer">
      <div className="container">
        <div className="payment">
          {/* Billing Info */}
          <div className="billInfo">
            <div className="title">
              <h2>
                Billing Info
                <span>
                  Please enter your billing info
                </span>
              </h2>
              <p>Step 1 of 4</p>
            </div>
            <div className="form">
              <div className="inputForm">
                <h3>Name</h3>
                <input type="text" placeholder="Your name" name="name" value={paymentData.bill.name} onChange={handlePaymentDataBill} />
              </div>
              <div className="inputForm">
                <h3>Phone Number</h3>
                <input type="text" placeholder="Phone number" name="phone" value={paymentData.bill.phone} onChange={handlePaymentDataBill} />
              </div>
              <div className="inputForm">
                <h3>Address</h3>
                <input type="text" placeholder="Adress" name="address" value={paymentData.bill.address} onChange={handlePaymentDataBill} />
              </div>
              <div className="inputForm">
                <h3>City</h3>
                <input type="text" placeholder="City" name="city" value={paymentData.bill.city} onChange={handlePaymentDataBill} />
              </div>
            </div>
          </div>
          {/* Rental Info */}
          <div className="rentalInfo">
            <div className="title">
              <h2>
                Rental Info
                <span>
                  Please select your rental date
                </span>
              </h2>
              <p>Step 2 of 4</p>
            </div>
            <div className="pickUp">
              <h3>
                <Location size="24" color="#3563E9"/>
                Pick-Up
              </h3>
              <div className="form">
                <div className="inputForm">
                  <h3>Location</h3>
                  <input type="text" placeholder="Location your pick-up" name="location" value={paymentData.rental.pickUp.location} onChange={handlePaymentDataRental} id="pickUp" />
                </div>
                <div className="inputForm">
                  <h3>Date</h3>
                  <input type="text" placeholder="Date  (12/24/2024)" name="date" value={paymentData.rental.pickUp.date} onChange={handlePaymentDataRental} id="pickUp" />
                </div>
                <div className="inputForm">
                  <h3>Time</h3>
                  <input type="text" placeholder="Time  (17:30)" name="time" value={paymentData.rental.pickUp.time} onChange={handlePaymentDataRental} id="pickUp" />
                </div>
              </div>
            </div>
            <div className="dropOff">
              <h3>
                <Location size="24" color="#54A6FF"/>
                Drop-Off
              </h3>
              <div className="form">
                <div className="inputForm">
                  <h3>Location</h3>
                  <input type="text" placeholder="Location your drop off" name="location" value={paymentData.rental.dropOff.location} onChange={handlePaymentDataRental} id="dropOff" />
                </div>
                <div className="inputForm">
                  <h3>Date</h3>
                  <input type="text" placeholder="Date  (12/24/2024)" name="date" value={paymentData.rental.dropOff.date} onChange={handlePaymentDataRental} id="dropOff" />
                </div>
                <div className="inputForm">
                  <h3>Time</h3>
                  <input type="text" placeholder="Time  (17:30)" name="time" value={paymentData.rental.dropOff.time} onChange={handlePaymentDataRental} id="dropOff" />
                </div>
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className="paymentMethod">
            <div className="title">
              <h2>
                Payment Method
                <span>
                  Please enter your payment method
                </span>
              </h2>
              <p>Step 3 of 4</p>
            </div>
            <div className="method">
              <div className="visaMethod">
                <div className="titleMethod">
                  <div className="radioMethod">
                    <input type="radio" name="" id="" checked={paymentMethod=='visa'? true:false} onChange={()=>setPaymentMethod('visa')} />
                    <h2>Creadit Card</h2>
                  </div>
                  <div className="imgMethod">
                    <img src={imgVS} alt="" />
                    <img src={imgMC} alt="" />
                  </div>
                </div>
                <div className={'formMethod '+(paymentMethod=='visa'?'showForm':'')}>
                  <div className="inputForm">
                    <h3>Card Number</h3>
                    <input type="text" placeholder="Card Number" name="cardNumber" value={paymentData.payment.visa.cardNumber} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Expration Date</h3>
                    <input type="text" placeholder="MM/YY" name="cardExp" value={paymentData.payment.visa.cardExp} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Card Holder</h3>
                    <input type="text" placeholder="Name card holder" name="cardHolder" value={paymentData.payment.visa.cardHolder} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>CV</h3>
                    <input type="text" placeholder="CV" name="cv" value={paymentData.payment.visa.cv} onChange={handlePaymentMethodData} />
                  </div>
                </div>
              </div>
              <div className="paypalMethod">
                <div className="titleMethod">
                  <div className="radioMethod">
                    <input type="radio" name="" id="" checked={paymentMethod=='paypal'? true:false} onChange={()=>setPaymentMethod('paypal')} />
                    <h2>Paypal</h2>
                  </div>
                  <div className="imgMethod">
                    <img src={imgPP} alt="" />
                  </div>
                </div>
                <div className={'formMethod '+(paymentMethod=='paypal'?'showForm':'')}>
                  <div className="inputForm">
                    <h3>Card Number</h3>
                    <input type="text" placeholder="Card Number" name="cardNumber" value={paymentData.payment.visa.cardNumber} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Expration Date</h3>
                    <input type="text" placeholder="MM/YY" name="cardExp" value={paymentData.payment.visa.cardExp} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Card Holder</h3>
                    <input type="text" placeholder="Name card holder" name="cardHolder" value={paymentData.payment.visa.cardHolder} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>CV</h3>
                    <input type="text" placeholder="CV" name="cv" value={paymentData.payment.visa.cv} onChange={handlePaymentMethodData} />
                  </div>
                </div>
              </div>
              <div className="bitcoinMethod">
                <div className="titleMethod">
                  <div className="radioMethod">
                    <input type="radio" name="" id="" checked={paymentMethod=='btc'? true:false} onChange={()=>setPaymentMethod('btc')} />
                    <h2>Bitcoin</h2>
                  </div>
                  <div className="imgMethod">
                    <img src={imgBTC} alt="" />
                  </div>
                </div>
                <div className={'formMethod '+(paymentMethod=='btc'?'showForm':'')}>
                  <div className="inputForm">
                    <h3>Card Number</h3>
                    <input type="text" placeholder="Card Number" name="cardNumber" value={paymentData.payment.visa.cardNumber} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Expration Date</h3>
                    <input type="text" placeholder="MM/YY" name="cardExp" value={paymentData.payment.visa.cardExp} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>Card Holder</h3>
                    <input type="text" placeholder="Name card holder" name="cardHolder" value={paymentData.payment.visa.cardHolder} onChange={handlePaymentMethodData} />
                  </div><div className="inputForm">
                    <h3>CV</h3>
                    <input type="text" placeholder="CV" name="cv" value={paymentData.payment.visa.cv} onChange={handlePaymentMethodData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Confirmation */}
          <div className="confirmation">
            <div className="title">
              <h2>
              Confirmation
                <span>
                  We are getting to the end. Just few clicks and your rental is ready!
                </span>
              </h2>
              <p>Step 4 of 4</p>
            </div>
            <div className="forms">
              <div className="form">
                <input type="checkbox" name="" id="" />
                <p>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
              </div>
              <div className="form">
                <input type="checkbox" name="" id="" />
                <p>I agree with our terms and conditions and privacy policy.</p>
              </div>
            </div>
            <button className="btnRentNow">Rent Now</button>
            <div className="bottomContent">
              <SecuritySafe size="48" color="#3563E9"/>
              <h3>All your data are safe</h3>
              <p>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>
          {/* Summary */}
        </div>
        <div className="rentalSummary">
          <div className="title">
            <h2>Rental Summary</h2>
            <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
          </div>
          <div className="imageContainer">
            <img src={dataCar.img} alt="" className="imageCar" />
            <h1>{dataCar.name}</h1>
          </div>
          <div className="price">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${dataCar.price.toFixed(2)}</p>
            </div>
            <div className="tax">
              <p>Tax <span>7%</span></p>
              <p>${(dataCar.price*0.07).toFixed(2)}</p>
            </div>
            <div className="promoCode">
              <input type="text" value={promoCode} onChange={e=>setPromoCode(e.target.value)} placeholder="Apply promo code" />
              <button className="btnApplyPromoCode">Apply Now</button>
            </div>
            <div className="totalPrice">
              <h4>Total Rental Price<span>Overall price and includes rental discount</span></h4>
              <h1>${(dataCar.price+(dataCar.price*0.07)).toFixed(2)}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment