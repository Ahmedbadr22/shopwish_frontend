import "./contact-us-section-style.css";
import {Button, TextField} from "@mui/material";
import {Facebook, Linkedin, Twitter, Youtube, GeoAlt, Envelope, Phone} from "react-bootstrap-icons";
import {useContext} from "react";
import MainThemeContext, {mainThemeContext} from "../../../context/main-theme-context/MainThemeContext";

const ContactUsSection = () => {
    const {primaryMain} = useContext(mainThemeContext);
    return (
        <div className="contact-us-section">
            <div className="contact-us-body">
                <h1>Get In Touch</h1>
                <p className="contact-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.
                </p>
                <h4 className="mt-5">Social Links</h4>
                <div className="social-links row my-4">
                    <a href="/" className="social-item col-lg-3">
                        <Facebook color={primaryMain} size={40}/>
                        <span>Shopwise</span>
                    </a>
                    <a href="/" className="social-item col-lg-3 mt-3 mt-lg-0">
                        <Twitter color={primaryMain} size={40}/>
                        <span>@Shopwise</span>
                    </a>
                    <a href="/" className="social-item col-lg-3 mt-3 mt-lg-0">
                        <Linkedin color={primaryMain} size={40}/>
                        <span>Shopwise</span>
                    </a>
                    <a href="/" className="social-item col-lg-3 mt-3 mt-lg-0">
                        <Youtube color={primaryMain} size={40}/>
                        <span>Shopwise</span>
                    </a>
                </div>
                <div className="contact-way row mt-5">
                    <div className="contact-info col-lg-6">
                        <h4>Contact Info</h4>
                        <div className="content-item">
                            <GeoAlt color={primaryMain} size={30}/>
                            <span>
                                123 Street, Old Trafford, New South London , UK
                            </span>
                        </div>

                        <div className="content-item">
                            <Envelope color={primaryMain} size={30}/>
                            <span>
                                 info@shopwise.com
                            </span>
                        </div>
                        <div className="content-item">
                            <Phone color={primaryMain} size={30}/>
                            <span>
                                  + 457 789 789 65
                            </span>
                        </div>
                    </div>
                    <div className="contact-form-section col-lg-6 mt-4 mt-lg-0">
                        <h4>Let's Talk</h4>
                        <form method={"post"} className="contact-form mt-4">
                            <TextField
                                required
                                fullWidth
                                id="outlined-multiline-static"
                                label="ًWrite Your Message"
                                multiline
                                rows={4}
                            />
                            <Button
                                type={"submit"}
                                className="mt-3"
                                variant="contained"
                            >
                                send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;