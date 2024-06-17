import Submenu4 from "@/app/submenu/Submenu4";
import Submenu5 from "@/app/submenu/Submenu5";
import Submenu6 from "@/app/submenu/Submenu6";

export default function Menu2(props) {
    return(
        <>
            {props.params.id === "1" ? <Submenu4/> : props.params.id === "2" ? <Submenu5/> : <Submenu6/>}
        </>
    )
}