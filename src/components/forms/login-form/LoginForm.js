import "./login-form-style.css";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";

const LoginForm = () => {


    return (
        <div className="sign-in-section">
            <div className="form-card shadow rounded">
                <h2>Login</h2>
                <form className="sign-in-form mt-4">
                    <TextField
                        fullWidth
                        required
                        name="email"
                        type={"email"}
                        label="Email"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        name="password"
                        type={"password"}
                        label="Password"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <div className="rem-for">
                        <FormControlLabel
                            label="Remember Me"
                            control={<Checkbox  />}
                        />
                        <Button
                            variant="text"
                        >
                            Forget My Password :(
                        </Button>
                    </div>
                    <Button
                        size={"large"}
                        type={"submit"}
                        variant="contained"
                        color={"primary"}
                    >
                        Log In
                    </Button>
                </form>
                <div className="dont-have-acc mt-3">
                    Don't Have Account?
                    <span>
                        <Button
                            href='/'
                            variant="text"
                        >
                            Register
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;