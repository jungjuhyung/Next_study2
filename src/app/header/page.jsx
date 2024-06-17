"use client"
import { deleteCookie, getCookie } from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import log from "/public/images/logo.jpg"
import join from "/public/images/join.png"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { SvgIcon } from "@mui/material"
import "./header.css";
import { useEffect, useState } from "react"

export default function Header() {
    // 로그인 성공하면 쿠키에 사용자 정보를 저장하자
    // 사용자 정보가 없으면 로그인 안된 것
    const [u_name, setU_Name] = useState("")
    useEffect(()=>{
        const uNameCookie = getCookie("u_name");
        if (uNameCookie) {
            setU_Name(uNameCookie);
        }
    })
    return(
        <>
            {/* u_name 정보가 있으면 실행 */}
            {
                u_name && (
                    <ul id="header2">
                        <li><Link href="/"><Image src={log} alt="" /></Link></li>
                        <p>{u_name}님 환영합니다.</p> 
                        <li><SvgIcon  component={LogoutIcon} onClick={()=>{
                            deleteCookie("u_name");
                            location.href = "/";
                        }} /></li>
                    </ul>
                )
            }
            {/* u_name 정보가 없으면 실행 */}
            {/* SvgIcon태그의 크기는 fontSize="large" 또는 sx={{fontSize : 60}} 로 지정 가능하다. */}
            {/* <li><Link href="login"><SvgIcon component={LoginIcon} fontSize="large" /></Link></li> */}
            {
                !u_name &&(
                    <ul id="header">
                        <li><Link href="/"><Image src={log} alt="" /></Link></li>
                        <li><Link href="login"><SvgIcon component={LoginIcon} sx={{fontSize : 60}} /></Link></li>
                        <li><Link href="/join"><Image src={join} alt="" width={60} height={60}/></Link></li>
                    </ul>
                )
            }
        </>
    )
}