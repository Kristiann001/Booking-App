import img1 from "./Images/MainHotel.jpg"

function Landing() {
    return (
      <>
      <div>
        <h1 className = " pt-20 text-center text-3xl font-thin ">WELCOME TO OASIS SUITES.</h1>       
      <img src={img1} alt="Motel Image" className="px-96 pt-6 rounded-3xl"></img>
      </div>
      </>
    )
  }
  
  export default Landing