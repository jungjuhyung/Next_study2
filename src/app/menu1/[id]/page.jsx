import Submenu1 from "@/app/submenu/Submenu1";
import Submenu2 from "@/app/submenu/Submenu2";
import Submenu3 from "@/app/submenu/Submenu3";

export default function Menu1(props) {
    return(
        <>
            {props.params.id === "1" ? <Submenu1/> : props.params.id === "2" ? <Submenu2/> : <Submenu3/>}
        </>
    )
}