import "@scss/pages/Err404.scss";
import { useEffect } from "react";

function Err404() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="err404Container">
      <div className="container">
        <h1>404 Not Found</h1>
      </div>
    </div>
  )
}

export default Err404