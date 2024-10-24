import { useState } from "react"
import Client from "./Client"
const Facture=()=>{
const[fact,setFact]=useState(
{
numfact:"100",
datefact:"21/12/2023",
mtfact:10000
}
)
const handlechange=()=>{
setFact({...fact,numfact:200})
}
return(
<>
<h1>{fact.numfact}</h1>
<Client/>
<h5>{fact.datefact}</h5>
<h5>{fact.mtfact}</h5>
<button className="btn btn-primary"
onClick={()=>handlechange()}>Modifier</button>
</>
)
}
export default Facture