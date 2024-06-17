import Link from "next/link";
import "./nav.css"

export default function Nav(props) {
    return(
        <div id="menu">
            <ul>
                <li>MENU_1
                    <ul>
                        <li><Link href="/menu1/1">Sub_menu_1</Link></li>
                        <li><Link href="/menu1/2">Sub_menu_2</Link></li>
                        <li><Link href="/menu1/3">Sub_menu_3</Link></li>
                    </ul>
                </li>
                <li>MENU_2
                    <ul>
                        <li><Link href="/menu2/1">Sub_menu_1</Link></li>
                        <li><Link href="/menu2/2">Sub_menu_2</Link></li>
                        <li><Link href="/menu2/3">Sub_menu_3</Link></li>
                    </ul>
                </li>
                <li>MENU_3
                    <ul>
                        <li><Link href="#">Sub_menu_1</Link></li>
                        <li><Link href="#">Sub_menu_2</Link></li>
                        <li><Link href="#">Sub_menu_3</Link></li>
                    </ul>
                </li>
                <li>MENU_4
                    <ul>
                        <li><Link href="#">Sub_menu_1</Link></li>
                        <li><Link href="#">Sub_menu_2</Link></li>
                        <li><Link href="#">Sub_menu_3</Link></li>
                    </ul>
                </li>
                <li>MENU_5
                    <ul>
                        <li><Link href="#">Sub_menu_1</Link></li>
                        <li><Link href="#">Sub_menu_2</Link></li>
                        <li><Link href="#">Sub_menu_3</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}