import {Navbar} from "../../components/Navbar";
import {TitleWithInput} from "../../components/TitleWithInput";
import {useState} from "react";
import {loginApiCall, saveLoggedInUser, storeToken} from "../../service/AuthService";
import {useNavigate} from "react-router-dom";
import {PiWarningCircle} from "react-icons/pi";

const LoginPage = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [emailFieldError, setEmailFieldError] = useState("");
    const [passwordFieldError, setPasswordFieldError] = useState("");

    const navigator = useNavigate();

    async function handleLogin(e) {
        if (usernameOrEmail.trim() === "" || password.trim() === "") {
            if (password.trim() === "") {
                setPasswordFieldError("Password field cannot be blank");
            }
            if (usernameOrEmail.trim() === "") {
                setEmailFieldError("Email field cannot be blank");
            }
        } else {
            const loginObj = {
                usernameOrEmail: usernameOrEmail,
                password: password
            };

            await loginApiCall(loginObj).then(response => {

                const token = "Bearer " + response.data.accessToken;
                const role = response.data.role;
                const userId = response.data.userId;

                storeToken(token);
                saveLoggedInUser(userId, usernameOrEmail, role);
                navigator("/");
            }).catch(error => {
                setError("Invalid credentials");
            })
        }
    }

    return (
        <>
            <section className="main-page-section">
                <Navbar/>
                <br/><br/><br/>
                <div className="container">
                    <p className="recipe-title">Login</p>
                    <br/><br/><br/>


                    <div className="row d-flex">
                        <TitleWithInput
                            name='Email'
                            type='text'
                            value={usernameOrEmail}
                            error={emailFieldError}
                            onChange={e => {
                                setEmailFieldError("")
                                setUsernameOrEmail(e.target.value)
                            }}/>
                        {
                            emailFieldError &&
                            <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                                 style={{paddingLeft: '30px'}}>
                                <PiWarningCircle size={20} color="red"/><span
                                className="mt-auto mb-auto empty-field-message"
                                style={{marginLeft: '10px'}}>{emailFieldError}</span>
                            </div>
                        }
                    </div>


                    <br/><br/>


                    <div className="row">
                        <TitleWithInput
                            name='Password'
                            value={password}
                            type='password'
                            error={passwordFieldError}
                            onChange={e => {
                                setPasswordFieldError("")
                                setPassword(e.target.value)
                            }}/>
                        {
                            passwordFieldError &&
                            <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                                 style={{paddingLeft: '30px'}}>
                                <PiWarningCircle size={20} color="red"/><span
                                className="mt-auto mb-auto empty-field-message"
                                style={{marginLeft: '10px'}}> {passwordFieldError}</span>
                            </div>
                        }
                    </div>


                    <br/><br/>
                    {
                        error &&
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <span className="span-error">{error}</span>
                            </div>
                        </div>
                    }
                    <br/><br/><br/>
                    <div className="row">
                        <div className="col-2 offset-5 d-flex justify-content-center">
                            <button className="main-large-orange-save-button mt-auto mb-auto"
                                    onClick={handleLogin}>Login
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export {LoginPage}