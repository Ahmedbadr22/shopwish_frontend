import "./subscribe-section-style.css";
import {Box, Button} from "@mui/material";

const SubscribeSection = () => {
    return (
        <Box
            component={"div"}
            className="subscribe-section"
            sx={{backgroundColor: 'primary.main'}}
        >
            <div className="subscribe-content">
                <span className="join-text">
                    Register To Join Us Now
                </span>
                <Button
                    className="signup-btn"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    type={"submit"}
                >
                  Sign Up
                </Button>
            </div>
        </Box>
    );
};

export default SubscribeSection;