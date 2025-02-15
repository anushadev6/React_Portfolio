import "./Cards.css"
function Card(props){
    return(
    <div className="card" id="Services">

    <img src={props.img} alt=""/>    
    <h style={{padding:"3px"}}>{props.h2}</h2>
    <p style={{padding:"3px"}}>{props.p}</p>
<button style={{padding:"3px",marginTop:"5px"}}>{props.button}</button>
    </div>)
}

 export function CardCopy(){
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Card img="https://miro.medium.com/v2/resize:fit:1400/0*li6oPZ3gK_LmybIQ" h2="Prototype Web Design" p="Lorem ipsum dolor sit amet consectetur adipisicing elit." button="Know More" />
        <Card img="https://www.wowmakers.com/static/d12143496b516edf25cefafbfcb9048e/feff.jpg" h2="Frontend UI Design" p="Lorem ipsum dolor sit amet consectetur adipisicing elit." button="Know More"/>
        <Card img="https://thefinch.design/wp-content/uploads/2023/12/frontend-development.png" h2="Custom App Development" p="Lorem ipsum dolor sit amet consectetur adipisicing elit." button="Know More"/>
    </div>
    
    )
}


