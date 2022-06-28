import {createContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';

const AuthContext = createContext(undefined);

export default AuthContext;

export const AuthProvider = ({children}) => {

    const [email, setEmail] = useState(null);
    const [user, setUser] = useState(() => localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
    const [tokens, setTokens] = useState(() => localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null);

    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        let response = await fetch('http://127.0.0.1:8000/accounts/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': e.target.email.value,
                'password': e.target.password.value
            }),
        });

        let data = await response.json();

        if (response.status === 202){

            setUser(data.done.user);
            setTokens(data.done.token);
            localStorage.setItem('user', JSON.stringify(data.done.user));
            localStorage.setItem('tokens', JSON.stringify(data.done.token));
            navigate('/');
        }else{
            if(data.error){
                console.log("data is error")
                if(data.error.email && data.error.password){
                    console.log("both is error")
                    setIsEmailError(true);
                    setIsPasswordError(true);

                    setEmailError(data.error.email);
                    setPasswordError(data.error.password);
                }else if(data.error.email){
                    console.log("email is error")
                    setIsEmailError(true)
                    setEmailError(data.error.email)
                }else if(data.error.password){
                    setPasswordError(data.error.password);
                    setIsPasswordError(true);
                }
            }
        }
    };

    const userRegister = async (e)  =>{
        e.preventDefault();

        let response = await fetch('http://127.0.0.1:8000/accounts/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'first_name': e.target.first_name.value,
                'last_name': e.target.last_name.value,
                'phone_number': e.target.phone_number.value,
                'email': e.target.email.value,
                'password': e.target.password.value,
            }),
        });

        if(response.status === 202){
            let responseData = await response.json();
            setEmail(responseData.email);
            navigate('/sign-in');
        }else{
            let error = await response.json();
            console.log(response);
            console.log(error);
        }
    };

    const logout = async () =>{
        const refreshToken = tokens.refresh

        let response = await fetch('http://127.0.0.1:8000/accounts/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'refresh': refreshToken,
            })
        });

        if (response.status === 204){
            localStorage.removeItem('user');
            localStorage.removeItem('tokens');
            setUser(null);
            setTokens(null)
        }else{
            console.log('error')
            let error = await response.json()
            console.log(error)
        }
    }

    const updateAccessToken = async () => {
        const refreshToken = tokens?.refresh;

        let response = await fetch('http://127.0.0.1:8000/accounts/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'refresh': refreshToken,
            }),
        });

        if(response.status === 200){
            let newToken = await response.json();
            tokens['access'] = newToken['access'];
            setTokens(tokens);
        }else{
            console.log('token update logout');
            console.log(response);
            await logout();
        }
    }

    const TokenUpdateTime = 1000 * 60 * 4;

    useEffect(() => {
        let interval = setInterval(() => {
            if (user) updateAccessToken().then();
        }, TokenUpdateTime);
        return () => clearInterval(interval);
    }, [TokenUpdateTime, updateAccessToken, user])


    const context = {
        email: email,
        user: user,
        logout: logout,
        login: login,
        userRegister: userRegister,
        emailError: emailError,
        passwordError: passwordError,
        isEmailError: isEmailError,
        isPasswordError: isPasswordError
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

