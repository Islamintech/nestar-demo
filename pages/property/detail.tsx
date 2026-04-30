import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
    console.log("Property component - page router")
    return(
        <>
        <Container>Property Detail</Container>
        </>
    )
}

export default withLayoutBasic(PropertyDetail);