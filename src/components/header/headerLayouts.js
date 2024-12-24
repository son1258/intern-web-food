import { Outlet } from "react-router-dom";
import Header from "./header";

function HeaderLayout(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default HeaderLayout;
