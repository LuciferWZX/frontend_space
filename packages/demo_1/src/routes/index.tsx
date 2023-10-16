import {FC, useState} from "react";
import {generateId} from "@space/utils";
import {useLinkIcon} from '@space/react-hooks'
import LogoIcon from '@space/assets/logo.svg'
const WithRoute:FC = () => {
    const [val,setVal]=useState<string>("")
    const [id,setId]=useState<string>("")
    useLinkIcon(LogoIcon)
    const clickBtn=()=>{
        setId(generateId())
    }
    return(
        <div>
            <input value={val} onChange={event => setVal(event.target.value)} />
            <div>
                {id}
            </div>
            <button onClick={clickBtn}>生成id</button>
        </div>
    )
}
export default WithRoute