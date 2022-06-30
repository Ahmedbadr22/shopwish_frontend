import "./product-viewer-style.css";
import ProductMainImage from "../../../images/product-image1.png";
import {useState} from "react";
import {Button, Chip, Rating} from "@mui/material";
import ProductImagesSlider from "../../sliders/product-images-slider/ProductImagesSlider";

const ProductViewer = () => {

    const [isFavProduct, setIsFavProduct] = useState(false);

    const isAvailableProduct = true;

    const handleFavSelection = () => setIsFavProduct(!isFavProduct);

    return (
        <div className="product-viewer container">
            <div className="row">
                <div className="product-image-holder col-lg-5 col-md-6">
                    <div className="main-image-holder">
                        <img src={ProductMainImage} alt="product"/>
                    </div>
                    <div className="other-image-holder">
                        <ProductImagesSlider/>
                    </div>
                </div>
                <div className="product-detail-holder col-lg-7 col-md-6">
                    <h1 className="product-detail-title mt-5 mt-lg-0">Detail</h1>
                    <div className="product-header mt-4">
                        <h1 className="product-title ">Itaque Earum Rerum</h1>
                        <div className="favorite-icon" onClick={handleFavSelection}>
                            {
                                isFavProduct ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                         className="selected-fav-product bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                         className="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                            }
                        </div>
                    </div>
                    <div className="product-price-section mt-2">
                        <span className="current-price">$1000</span>
                        <div className="product-rating">
                            <Rating
                                name="simple-controlled"
                                value={3}
                                readOnly
                            />
                            <span className="customer-rating-count">(1 customer review)</span>
                        </div>
                    </div>
                    <p className="product-desc mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id
                        varius nunc id varius nunc.
                    </p>
                    <div className="product-properties-list mt-3">
                        <div className="property">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-shield-check" viewBox="0 0 16 16">
                                <path
                                    d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                <path
                                    d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            <span>Verified Product</span>
                        </div>
                        <div className="property">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                <path
                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                <path fillRule="evenodd"
                                      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                            </svg>
                            <span>30 Day Return Policy</span>
                        </div>
                        <div className="property">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-coin" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                            </svg>
                            <span>Cash on Delivery available</span>
                        </div>
                    </div>
                    <h5 className="available-text mt-3" style={{color: isAvailableProduct ? "green" : "orange"}}>
                        {
                            isAvailableProduct ? "Available In The Stock" : "Not available In The Stock"
                        }
                    </h5>
                    <div className="product-colors-list">
                        <span className="product-color-title">Color</span>
                        <span className="product-color" style={{backgroundColor: "var(--red-color)"}}/>
                        <span className="product-color" style={{backgroundColor: "green"}}/>
                        <span className="product-color" style={{backgroundColor: "yellowgreen"}}/>
                    </div>
                    <div className="product-sizes-list mt-2">
                        <span className="product-size-title">Size</span>
                        <span className="product-size">L</span>
                        <span className="product-size">XL</span>
                        <span className="product-size">S</span>

                    </div>
                    <div className="add-to-cart-section mt-2">
                        <Button
                            variant="contained"
                            color={"primary"}
                            size={"large"}
                        >
                            add To Cart
                        </Button>
                    </div>
                    <div className="other-info-section mt-3">
                        <div className="category other-info-topic-container">
                            <span className="other-info-title upper-case">Category :</span>
                            <span className="category-content">Category</span>
                        </div>
                        <div className="tags other-info-topic-container mt-2">
                            <span className="other-info-title upper-case">Tags :</span>
                            <Chip
                                className="tag"
                                label="Tag Name"
                                variant="outlined"
                                clickable
                            />
                        </div>
                    </div>
                    <div className="share-product mt-4">
                        <span className="other-info-title upper-case">Share :</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductViewer;