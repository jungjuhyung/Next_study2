"use client"
import Item from "@/app/item/page";
import axios from "axios";
import { useEffect, useState } from "react";

export default function view(props){
    const id = props.params.id;

    const[item, setItem] = useState({});
     
    // http://makeup-api.herokuapp.com/api/v1/products/488.json
    // 여기서는 문자열과 js를 같이 사용하기 때문에 `` 사용
    const API_URL = `/makeup/v1/products/${id}.json`;
    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data);
            setItem(data.data);
        }).catch(
            console.log("에러")
        )
    }
    
    // 최초 한번만 실행
    useEffect(()=>{
        getData();
    },[])

    return(
        <div>
            {/* item을 표현하는 Component를 만들어서 사용 */}
            {/* react랑 다르게 Component를 폴더로 만들어서 사용 */}
            <Item item = {item}/>
        </div>
    )
}