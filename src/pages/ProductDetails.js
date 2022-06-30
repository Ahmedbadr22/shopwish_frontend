import ProductViewer from "../components/sections/product-viewer/ProductViewer";
import PageHeader from "../components/navigations/page-header/PageHeader";
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    let {id} = useParams();
    console.log(id);
    return (
        <>
            <PageHeader sectionTitle={"Product Name"} />
            <ProductViewer />
        </>
    );
};

export default ProductDetails;