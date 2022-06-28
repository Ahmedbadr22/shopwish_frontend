import "./nav-header-style.css";
import SignInButton from "../../buttons/sign-in-button/SignInButton";
import SignUpButton from "../../buttons/sign-up-button/SignUpButton";
import WishlistButton from "../../buttons/wishlist-button/WishlistButton";
import {Facebook, Tiktok, Linkedin, Twitter} from "react-bootstrap-icons";
import {IconButton} from "@mui/material";

const NavHeader = () => {

    return (
        <div className="nav-header container p-3">
            <div className="row">
                <div className="social col-12 col-lg-6">
                    <IconButton
                        href="/"
                        color={"primary"}
                        className="facebook social-icon"
                    >
                        <Facebook size={20}/>
                    </IconButton>
                    <IconButton
                        color={"primary"}
                        href="/"
                        className="linkedin social-icon"
                    >
                        <Linkedin size={20}/>
                    </IconButton>
                    <IconButton
                        color={"primary"}
                        href="/"
                        className="twitter social-icon">
                        <Twitter size={20}/>
                    </IconButton>
                    <IconButton
                        color={"primary"}
                        href="/"
                        className="tiktok social-icon"
                    >
                        <Tiktok size={20} />
                    </IconButton>
                </div>
                <div className="action-bar col-12 col-lg-6">
                    <WishlistButton />
                    <SignInButton />
                    <SignUpButton />
                </div>
            </div>
        </div>
    );
};

export default NavHeader;