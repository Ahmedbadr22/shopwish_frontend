import {Button} from "@mui/material";
import { Person } from 'react-bootstrap-icons';

const SignInButton = () => {
    return (
        <Button
            variant="text"
            href='/'
            color={"primary"}
            className="wishlist action-item"
            startIcon={<Person size={20}/> }
        >
            <span>Sign In</span>
        </Button>
    );
};

export default SignInButton;