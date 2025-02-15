import "./Header.css"
function Header(){
    return(
   <div className="header">
    <div> 
    <img src="https://cdn.dribbble.com/userupload/24973153/file/original-aab778d2d5e4dec5794a213dd68b1608.png?resize=752x&vertical=center" alt="" />
</div>
    <div>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact</a></div>
        <button className="btn btn-primary">Hire Me</button>
    </div>)
}

export default Header;