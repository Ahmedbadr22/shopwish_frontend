import {Button} from "@mui/material";
import { Heart } from 'react-bootstrap-icons';

const WishlistButton = () => {
    return (
        <Button
            href='/'
            variant="text"
            color={"primary"}
            startIcon={<Heart size={20} /> }
        >
            Wishlist
        </Button>
    );
};

export default WishlistButton;