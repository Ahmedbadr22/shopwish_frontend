import React from 'react';
import {Breadcrumbs, Button} from "@mui/material";
import "./page-header-style.css";
import {useNavigate} from "react-router-dom";

const PageHeader = ({sectionTitle}) => {
    const navigateTo = useNavigate();
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="page-title col-lg-6">
                        {sectionTitle}
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <Breadcrumbs
                            separator="/"
                            aria-label="breadcrumb"
                        >
                            <Button
                                variant={"text"}
                                className="breadcrumb-link"
                                onClick={() => navigateTo('/')}
                            >
                                Home
                            </Button>
                            <span>{sectionTitle}</span>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;