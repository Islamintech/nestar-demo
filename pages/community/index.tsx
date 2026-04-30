import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";


const Community: NextPage = () => {
    return(
    <div>Community<button onClick={()=>alert("Hello MIT")} style={{margin: "15px"}}>Press Me</button><button/></div>
    )
}

export default withLayoutBasic(Community);