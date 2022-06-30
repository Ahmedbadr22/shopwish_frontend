import "./our-service-style.css";
import {Truck, Coin, Headset, CreditCard2Back} from "react-bootstrap-icons";

const OurService = () => {
    return(
        <div className="our-service-section">
            <div className="container">
                <div className="row">
                    <div className="service-item col-lg-3 col-md-6 col-sm-12">
                        <div className="service-icon">
                            <Truck size={40}/>
                        </div>
                        <div className="service-text">
                            <h6 className="service-text-title">Free Delivery</h6>
                            <span>Worldwide</span>
                        </div>
                    </div>
                    <div className="service-item col-lg-3 col-md-6 col-sm-12">
                        <div className="service-icon">
                            <Coin size={40}/>
                        </div>
                        <div className="service-text">
                            <h6 className="service-text-title">Money Return</h6>
                            <span>30 Days money return</span>
                        </div>
                    </div>
                    <div className="service-item col-lg-3 col-md-6 col-sm-12">
                        <div className="service-icon">
                            <Headset size={40}/>
                        </div>
                        <div className="service-text">
                            <h6 className="service-text-title">27/4 Online Support</h6>
                            <span>Customer Support</span>
                        </div>
                    </div>
                    <div className="service-item col-lg-3 col-md-6 col-sm-12">
                        <div className="service-icon">
                            <CreditCard2Back size={40}/>
                        </div>
                        <div className="service-text">
                            <h6 className="service-text-title">Payment Security</h6>
                            <span>Safe Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;