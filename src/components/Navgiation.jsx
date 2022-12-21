import "../styles/Navgiation.css";
import logo from "./images/tesla-9.svg";
function Navigation(){
    return (    
        <>
            <div className="nav">
                <img className="logo" src={logo} alt="logo" />  
                <ul className="mid-nav">
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model x</li>
                    <li>Model y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
                </ul>
                
                    <ul  className="right-nav">
                    <li>Shop</li>
                    <li>Account</li>
                    <li>Menu</li>
                    </ul>
            </div>
        </>
    )
}
export default Navigation;