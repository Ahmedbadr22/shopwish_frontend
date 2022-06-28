import "./navbar-style.css";
import logoImage from "../../../images/logo_dark-3.png"
import {List, Search, Bag} from "react-bootstrap-icons";
import {Badge, IconButton} from "@mui/material";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logoImage} alt={"logo"}/>
                </a>
                <IconButton
                    color={"primary"}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <List size={30} className="navbar-toggler-icon"/>
                </IconButton>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href='/'>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Categories
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/'>
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                About Us
                            </a>
                        </li>
                    </ul>
                    <div className="nav-action ms-lg-3">
                        <IconButton
                            color={"primary"}
                            href="/"
                            className="nav-action-item"
                        >
                            <Search size={20}/>
                        </IconButton>
                        <IconButton
                            color={"primary"}
                            href="/"
                            className="cart nav-action-item"
                        >
                            <Badge
                                badgeContent={2}
                                color="primary"
                            >
                                <Bag size={20}/>
                            </Badge>
                        </IconButton>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
