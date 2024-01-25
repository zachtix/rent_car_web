import { useState, useEffect } from "react"
import "@scss/components/Filter.scss";

function Filter({ HandleFilter }) {
  const [ filterType, setFilterType ] = useState("all")
  const [ filterSeat, setFilterSeat ] = useState("all")
  const [ filterPrice, setFilterPrice ] = useState(100)
  const handleFilterType = (e)=>{
    const { value } = e.target
    setFilterType(value)
  }
  const handleFilterSeat = (e)=>{
    const { value } = e.target
    setFilterSeat(value)
  }
  const handleFilterPrice = (e)=>{
    const { value } = e.target
    setFilterPrice(Number(value))
  }
  useEffect(() => {
    HandleFilter({
      type: filterType,
      capacity: filterSeat,
      price: Number(filterPrice)
    });
  }, [filterType, filterSeat, filterPrice]);
  return(
    <div className="filterContainer">
      <div className="type">
        <p className="titleFilter">Type</p>
        <div className="radioForm">
          <input type="radio" id="all" value="all" checked={filterType=="all"?true:false} onClick={handleFilterType} />
          <label for="all">All</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="sport" value="sport" checked={filterType=="sport"?true:false} onClick={handleFilterType} />
          <label for="sport">Sport</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="sedan" value="sedan" checked={filterType=="sedan"?true:false} onClick={handleFilterType} />
          <label for="sedan">Sedan</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="suv" value="suv" checked={filterType=="suv"?true:false} onClick={handleFilterType} />
          <label for="suv">Suv</label><br/>
        </div>
      </div>
      <div className="capacity">
        <p className="titleFilter">Capacity</p>
        <div className="radioForm">
          <input type="radio" id="allSeat" value="all" checked={filterSeat=="all"?true:false} onClick={handleFilterSeat} />
          <label for="allSeat">All</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="2" value="2" checked={filterSeat=="2"?true:false} onClick={handleFilterSeat} />
          <label for="2">2 Seat</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="4" value="4" checked={filterSeat=="4"?true:false} onClick={handleFilterSeat} />
          <label for="4">4 Seat</label>
        </div>
        <div className="radioForm">
          <input type="radio" id="6" value="6" checked={filterSeat=="6"?true:false} onClick={handleFilterSeat} />
          <label for="6">6 Seat</label><br/>
        </div>
      </div>
      <div className="price">
        <p className="titleFilter">Price</p>
        <input type="range" value={filterPrice} max="100" onChange={handleFilterPrice} />
        <span>Max. ${filterPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Filter