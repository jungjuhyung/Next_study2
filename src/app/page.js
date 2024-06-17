"use client"
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./ItemList/page";

export default function Home() {
  const[list, setList] = useState([])
  const API_URL = "/makeup/v1/products.json?brand=maybelline"
  const getData = () => {
    axios.get(
      API_URL
    ).then(
      data =>{
        setList(data.data)
      }
    ).catch(
      console.log("에러 발생")
    )
  }
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>베스트 상품</h2>
        <Divider /> {/* 구분선 */}
        {/* slice(시작인덱스, 끝인덱스) : 시작부터 끝을 포함하지 않는 위치까지 잘라서 반환 */}
        <ItemList list={list.slice(0,9)} />
      </div>

      <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>신상품 상품</h2>
        <Divider /> {/* 구분선 */}
        <ItemList list={list.slice(0, 9)} />
      </div>
    </div>
  );
}
