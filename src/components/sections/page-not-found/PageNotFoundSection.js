import "./page-not-found-style.css";
import {Button} from "@mui/material";

const PageNotFoundSection = () => {
    return (
        <div className="not-found-section text-center">
            <h1 className="big-title">404</h1>
            <h5>oops! The page you requested was not found!</h5>
            <p className="not-found-error-body">
                The page you are looking for was moved, removed, renamed or might never existed.
            </p>
            <Button
                className="mt-2"
                variant="contained"
                color="primary"
                size={"large"}
            >
                Back To Home
            </Button>
        </div>
    );
};

export default PageNotFoundSection;