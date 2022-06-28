import {Button} from "@mui/material";
import { Lock } from 'react-bootstrap-icons';


const SignUpButton = () => {
    return (
        <Button
            variant="text"
            color={"primary"}
            href='/'
            className="action-item"
            startIcon={<Lock size={20} />}
        >
            <span>Sign Up</span>
        </Button>
    );
};

export default SignUpButton;