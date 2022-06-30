import {Button} from "@mui/material";
import { Lock } from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";


const SignUpButton = () => {
    const navigateTo = useNavigate();
    return (
        <Button
            variant="text"
            color={"primary"}
            onClick={() => navigateTo('sign-up')}
            className="action-item"
            startIcon={<Lock size={20} />}
        >
            <span>Sign Up</span>
        </Button>
    );
};

export default SignUpButton;