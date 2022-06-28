import {Button} from "@mui/material";
import { Power } from 'react-bootstrap-icons';

const LogoutButton = ({logout}) => {
    return (
        <Button
            variant="text"
            color={"primary"}
            onClick={logout}
            className="wishlist action-item"
            startIcon={<Power size={20}/> }
        >
            <span>logout</span>
        </Button>
    );
};

export default LogoutButton;