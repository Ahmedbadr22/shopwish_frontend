import {Button} from "@mui/material";
import { Person } from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";

const SignInButton = () => {
    const navigateTo = useNavigate();
    return (
        <Button
            variant="text"
            onClick={() => navigateTo('sign-in')}
            color={"primary"}
            className="wishlist action-item"
            startIcon={<Person size={20}/> }
        >
            <span>Sign In</span>
        </Button>
    );
};

export default SignInButton;