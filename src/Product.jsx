import RecordPannel from "./RecordPannel";
import ProductInfo from "./ProductInfo"
import UploadPannel from "./UploadPannel"

const Product = () => {
    return(
        <div className="product-page-container">
            <ProductInfo/>
            {/* <RecordPannel/> */}
            <UploadPannel/>

        </div>
    )


}
export default Product;