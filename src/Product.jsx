import RecordPannel from "./RecordPannel";
import ProductInfo from "./ProductInfo"
import UploadPannel from "./UploadPannel"
import SampleDownload from "./SampleDownload";

const Product = () => {
    return(
        <div className="product-page-container">
            <ProductInfo/>
            {/* <RecordPannel/> */}
            <UploadPannel/>
            <SampleDownload/>


        </div>
    )


}
export default Product;