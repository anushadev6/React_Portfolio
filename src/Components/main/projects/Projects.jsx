import "./Projects.css"
import PortfolioIcon from "../../../assets/images/Portfolio.png";
import EaIcon from "../../../assets/images/easports.png" 
import EcomIcon from "../../../assets/images/ecom.png"

function Project({img,p}){
    return(
    <div className="projects" id="Projects" style={{backgroundImage:`url(${img})`,
         backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        width: "300px",
        position: "relative",
        color: "white"}}>
 <div className="overlay">
<h3>{p}</h3>
</div>
<div>
</div>
    </div>)
}

export function ProjectsCopy(){
    return(
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Project img={EcomIcon} p="React E-Com Website" />
            <Project img={PortfolioIcon} p="Personal Portfolio React"/>
            <Project img={EaIcon} p="EA Sports Clone"/>

            </div>
    )
}
