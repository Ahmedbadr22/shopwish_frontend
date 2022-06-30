import {Heart, HeartFill} from "react-bootstrap-icons";
import ProductImage from "../../../../images/product-image1.png";
import {Button, IconButton, Paper, Stack, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {mainThemeContext} from "../../../../context/main-theme-context/MainThemeContext";

const MainProductCard = () => {
    const {primaryMain} = useContext(mainThemeContext);

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavSelection = () => setIsFavorite(!isFavorite);

    return (
        <Paper
            className="main-product-card"
            elevation={3}
            sx={{
                marginInline: 1,
                padding: 1,
                width: 300,
                borderRadius: 4
            }}
        >
            <Stack
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
            >
                <Paper
                    className="sale-banner"
                    elevation={0}
                    sx={{backgroundColor: primaryMain, padding: "2px", paddingInline: "8px", color: "#FFF"}}
                >
                    20% Off
                </Paper>
                <IconButton
                    color={"primary"}
                    onClick={handleFavSelection}
                >
                    {isFavorite ? <HeartFill/> : <Heart/>}
                </IconButton>
            </Stack>
            <div className="img-holder text-center">
                <img src={ProductImage} alt="product" className="product-img" width={230}/>
            </div>
            <Typography
                variant={"h5"}
                mt={1}
            >
                Product Name
            </Typography>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={1}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                >
                    <Typography
                        className="product-price"
                        color={primaryMain}
                        sx={{fontSize: 20}}
                    >
                        1000 EGP
                    </Typography>
                    <Typography
                        className="product-price"
                        sx={{fontSize: 15}}
                    >
                        <del>1500 EGP</del>
                    </Typography>
                </Stack>
                <Button
                    variant={"outlined"}
                >
                    +
                </Button>
            </Stack>
        </Paper>
    );
};

export default MainProductCard;