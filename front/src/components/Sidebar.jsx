import NavIcon from "./NavIcon";

import meditation from "../assets/svg/meditation.svg"
import swimming from "../assets/svg/swimming.svg"
import cycling from "../assets/svg/cycling.svg"
import bodybuilding from "../assets/svg/bodybuilding.svg"

function Sidebar() {

    return (
      <aside className="sidebar">
        <div className="sidebar-nav">
            <NavIcon content={meditation}/>
            <NavIcon content={swimming}/>
            <NavIcon content={cycling}/>
            <NavIcon content={bodybuilding}/>
        </div>
        <p className="copyright">Copyright SportSee 2020</p>
      </aside>
    );
  };
  
  export default Sidebar;
  