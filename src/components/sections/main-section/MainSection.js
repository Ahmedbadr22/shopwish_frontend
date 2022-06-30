import React from 'react';
import {Button, Stack} from "@mui/material";

import "./maini-section-style.css";

const MainSection = ({sectionTitle, slider}) => {
    return (
        <div className="main-section container">
            <Stack
                className="section-header mb-4"
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
            >
                <span className="section-title">{sectionTitle}</span>
                <Button
                    variant={"outlined"}
                >
                    View All
                </Button>
            </Stack>
            <div className="slider">
                {slider}
            </div>
        </div>
    );
};

export default MainSection;