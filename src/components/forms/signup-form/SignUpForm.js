import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import "./signup-form-style.css";

const SignUpForm = () => {


    return (
        <div className="sign-up-section">
            <div className="form-card shadow rounded">
                <h2>Register</h2>
                <form className="sign-up-form mt-4" >
                    <TextField
                        fullWidth
                        name={'first_name'}
                        required
                        type={"text"}
                        label="First Name"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        name={'last_name'}
                        type={"text"}
                        label="Last Name"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        type={"tel"}
                        name={'phone_number'}
                        label="Phone Number"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        name={'email'}
                        type={"email"}
                        label="Email"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        name={'password'}
                        type={"password"}
                        label="Password"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <div className="rem-for">
                        <FormControlLabel
                            label="I Am Agree With Terms"
                            control={<Checkbox  required/>}
                        />
                        <Button
                            variant="text"
                        >
                            Terms & Condition
                        </Button>
                    </div>
                    <Button
                        size={"large"}
                        type={"submit"}
                        variant="contained"
                        color={"primary"}
                    >
                        Register
                    </Button>
                </form>
                <div className="dont-have-acc mt-4">
                    I have an account ?
                    <span>
                        <Button
                            href='/'
                            variant="text"
                        >
                            Login
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;