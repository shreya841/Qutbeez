import abt1 from "./images/abt1.jpg"

import abt2 from "./images/abt2.jpg"
import abt4 from "./images/abt4.jpg"
import abt5 from "./images/abt5.jpg"
import abt6 from "./images/abt6.jpg"
import abt7 from "./images/abt7.jpg"
import abt8 from "./images/abt8.jpg"
import abt9 from "./images/abt9.jpg"
import abt10 from "./images/abt10.jpg"

const About=()=>{
    return(
        <>
        <div id="about1">

      <h1 id="abt">About QUTBEEZ</h1>  
                   
        </div>
<br/>
<br/>
<br/>
    <div id="con1">
        <div style={{marginLeft:"150px"}}>
    <img src={abt1} alt="abt1" height={400} />
    </div>
     <div  style={{marginRight:"350px"}}>
    <img src={abt2} alt="abt2" height={400} /> 
</div>
    </div>

    <br/>

    <br/>
    <br/>

   <h2 style={{marginLeft:"50px"}}>The Founder</h2>

   <br/>
   <br/>
<div id="cont2">
   <div style={{marginLeft:"150px"}}>
   <img src={abt4} alt="abt4" height={200} /> 
   <h5>HM Jawad</h5>
   </div>
   <div>
   <img src={abt5} alt="abt5" height={200} /> 
   <h5>Furqan Abid

   </h5>
   </div>
   <div>
   <img src={abt6} alt="abt6" height={200} /> 
   <h5>Abrar Khan</h5>
   </div>
   <div>
   <img src={abt7} alt="abt7" height={200} /> 
   <h5>Abdullah Ah</h5>
   </div>
</div>

<br/>
<br/>

<br/>
<br/>
<br/>
<h2 style={{marginLeft:"50px"}}>Testimonials</h2>
<br/>
<br/>
<br/>
<br/>


<div id="cont3">
    <div style={{marginLeft:"150px"}} >
    <img src={abt8} alt="abt8" height={200} /> 
    </div>
    <div>
        <h1>"</h1>
    Once we ordered some accessories items and we got the 
   products <br/> delivered in our doorstep, the customer support 
   was super helpful <br/> and they answered all my queries
   <br/><br/>
   <h4>Stacy</h4>
    </div>
    
</div>

<br/>
<br/>
<br/>
<br/>


<div id="cont4">
    <div style={{marginLeft:"150px"}} >
    <img src={abt9} alt="abt9" height={200} /> 
    </div>
    <div>
        <h1>"</h1>
    Once we ordered some accessories items and we got the 
   products <br/> delivered in our doorstep, the customer support 
   was super helpful <br/> and they answered all my queries
   <br/><br/>
   <h4>Tiffany</h4>
    </div>
    
    
</div>
<br/>
<br/>
<br/>
<br/>


<div id="cont5">
    <div style={{marginLeft:"150px"}} >
    <img src={abt10} alt="abt10" height={200} /> 
    </div>
    <div>
        <h1>"</h1>
    Once we ordered some accessories items and we got the 
   products <br/> delivered in our doorstep, the customer support 
   was super helpful <br/> and they answered all my queries
   <br/><br/>
   <h4>James</h4>
    </div>
    
</div>








        </>


    )
}

export default About;