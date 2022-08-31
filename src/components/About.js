import React,{useState} from 'react'

export default function About() {
    const [myStyle,setMystyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btntext, setbtntext] = useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color==="black"){
            setMystyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtntext("Enable Light mode")
        }
        else{
            setMystyle({
                color:"black",
                backgroundColor:"white"
            })
            setbtntext("Enable Dark mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1>About us</h1>
  <ul className="list-group">
     <li className="list-group-item" style={myStyle}>
         <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked/>
         <label className="form-check-label" htmlFor="firstRadio">First radio</label>
      </li>
      <li className="list-group-item"style={myStyle}>
          <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio"/>
          <label className="form-check-label" htmlFor="secondRadio">Second radio</label>
      </li>
      <li className="list-group-item"style={myStyle}>
         <input className="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio"/>
         <label className="form-check-label" htmlFor="thirdRadio">Third radio</label>
      </li>
 </ul>
 <div className="container my-3">
 <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
 </div>
 
</div>
  )
}
