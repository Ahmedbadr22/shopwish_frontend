import {Button} from "@mui/material";
import { Heart } from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";

const WishlistButton = () => {
    const navigateTo = useNavigate();
    return (
        <Button
            onClick={() => navigateTo('wishlist')}
            variant="text"
            color={"primary"}
            startIcon={<Heart size={20} /> }
        >
            Wishlist
        </Button>
    );
};

export default WishlistButton;