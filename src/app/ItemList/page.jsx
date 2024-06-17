import { Grid } from "@mui/material"
import "./itemList.css"
import Link from "next/link"

export default function ItemList({list}) {
    return(
        <div>
            <Grid container>
            {
                list.map((k)=>(
                    // grid container는 화면을 기본적으로 12분할해서 표현한다.
                    // grid item xs = {3} => 12분할된 container의 3칸을 차지한다는 뜻이다.
                    <Grid item xs={3} key={k.id}>
                        <Link href={"/view/"+k.id}>
                            <img src={k.image_link} alt={k.name} className="img_item" />
                            <strong>{k.name}</strong>
                            <span className="txt_info">{k.category} &nbsp; {k.product_type}</span>
                            <strong className="num_price">${k.price}</strong>
                        </Link>
                    </Grid>
                    )
                )
            }
        </Grid>
        </div>
    )
}