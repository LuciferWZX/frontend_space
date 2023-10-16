import {FC} from "react";
import LogoSvg from '@space/assets/logo.svg'
import { useLinkIcon } from "@space/react-hooks";
const WithRoute:FC = () => {
    useLinkIcon(LogoSvg)
    return(
        <div >
           这是模板
        </div>
    )
}
export default WithRoute