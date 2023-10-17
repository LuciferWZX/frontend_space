import { FC } from "react";
import {Outlet} from "react-router-dom";

const Layout:FC = () => {
    return(
        <div>
            this is layout
            <Outlet />
        </div>
    )
}
export default Layout