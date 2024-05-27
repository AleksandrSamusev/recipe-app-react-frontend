import {Navbar} from "../../components/Navbar";
import {TitleWithInput} from "../../components/TitleWithInput";
import {useState} from "react";
import {registerApiCall} from "../../service/AuthService";
import {useNavigate} from "react-router-dom";
import ReactImagePickerEditor, {ImagePickerConf} from "react-image-picker-editor";
import {PiWarningCircle} from "react-icons/pi";

const RegistrationPage = () => {

    const initialImage = '';

    const config: ImagePickerConf = {
        borderRadius: '8px',
        language: 'en',
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        compressInitial: null,
    };

    const navigator = useNavigate();

    const [error, setError] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState("");

    const [firstNameInputError, setFirstNameInputError] = useState("");
    const [lastNameInputError, setLastNameInputError] = useState("");
    const [emailInputError, setEmailInputError] = useState("");
    const [usernameInputError, setUsernameInputError] = useState("");
    const [passwordInputError, setPasswordInputError] = useState("");

    function handleRegister() {

        if (firstName.trim() === "" || lastName === "" || email === "" || username === "" || password === "") {
            if (firstName.trim() === "") {
                setFirstNameInputError("First name cannot be blank")
            }
            if (lastName.trim() === "") {
                setLastNameInputError("Last name cannot be blank")
            }
            if (email.trim() === "") {
                setEmailInputError("Email cannot be blank")
            }
            if (username.trim() === "") {
                setUsernameInputError("Username cannot be blank")
            }
            if (password.trim() === "") {
                setPasswordInputError("Password cannot be blank")
            }
        } else {
            const registerObject = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: email,
                avatar: avatar
            }

            registerApiCall(registerObject).then(response => {
                navigator("/")
            }).catch(error => {
                console.log(error.response.data.errorMessages)
                setError(error.response.data.errorMessages)
            })
        }
    }

    return (
        <section className="main-page-section">
            <Navbar/>
            <div className="container">
                <p className="recipe-title">Sign Up</p>
                <br/>
                <div className="d-flex justify-content-center">
                    <ReactImagePickerEditor
                        config={config}
                        imageSrcProp={initialImage}
                        imageChanged={(data) => {
                            setAvatar(data);
                        }}
                    />
                </div>
                <br/>
                <br/>

                <div className="row d-flex">
                    <TitleWithInput
                        name='First Name'
                        type='text'
                        value={firstName}
                        error={firstNameInputError}
                        onChange={e => {
                            setFirstNameInputError("")
                            setFirstName(e.target.value)
                        }}/>
                    {
                        firstNameInputError &&
                        <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                             style={{paddingLeft: '30px'}}>
                            <PiWarningCircle size={20} color="red"/><span
                            className="mt-auto mb-auto empty-field-message"
                            style={{marginLeft: '10px'}}>{firstNameInputError}</span>
                        </div>
                    }
                </div>
                <br/>

                <div className="row d-flex">
                    <TitleWithInput
                        name='Last Name'
                        type='text'
                        value={lastName}
                        error={lastNameInputError}
                        onChange={e => {
                            setLastNameInputError("")
                            setLastName(e.target.value)
                        }}/>
                    {
                        lastNameInputError &&
                        <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                             style={{paddingLeft: '30px'}}>
                            <PiWarningCircle size={20} color="red"/><span
                            className="mt-auto mb-auto empty-field-message"
                            style={{marginLeft: '10px'}}>{lastNameInputError}</span>
                        </div>
                    }
                </div>
                <br/>

                <div className="row d-flex">
                    <TitleWithInput
                        name='Email'
                        type='text'
                        value={email}
                        error={emailInputError}
                        onChange={e => {
                            setEmailInputError("")
                            setError([])
                            setEmail(e.target.value)
                        }}/>
                    {
                        emailInputError &&
                        <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                             style={{paddingLeft: '30px'}}>
                            <PiWarningCircle size={20} color="red"/><span
                            className="mt-auto mb-auto empty-field-message"
                            style={{marginLeft: '10px'}}>{emailInputError}</span>
                        </div>
                    }
                </div>
                <br/>

                <div className="row d-flex">
                    <TitleWithInput
                        name='Username'
                        type='text'
                        value={username}
                        error={usernameInputError}
                        onChange={e => {
                            setUsernameInputError("")
                            setUsername(e.target.value)
                        }}/>
                    {
                        usernameInputError &&
                        <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                             style={{paddingLeft: '30px'}}>
                            <PiWarningCircle size={20} color="red"/><span
                            className="mt-auto mb-auto empty-field-message"
                            style={{marginLeft: '10px'}}>{usernameInputError}</span>
                        </div>
                    }
                </div>
                <br/>

                <div className="row d-flex">
                    <TitleWithInput
                        name='Password'
                        type='password'
                        value={password}
                        error={passwordInputError}
                        onChange={e => {
                            setPasswordInputError("")
                            setPassword(e.target.value)
                        }}/>
                    {
                        passwordInputError &&
                        <div className="col-3 offset-1 d-flex justify-content-start align-items-center"
                             style={{paddingLeft: '30px'}}>
                            <PiWarningCircle size={20} color="red"/><span
                            className="mt-auto mb-auto empty-field-message"
                            style={{marginLeft: '10px'}}>{passwordInputError}</span>
                        </div>
                    }
                </div>
                <br/>
                {
                    error &&
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <span className="span-error">{error[0]}</span>
                        </div>
                    </div>

                }
                <br/><br/>
                <div className="row">
                    <div className="col-2 offset-5 d-flex justify-content-center">
                        <button className="main-large-orange-save-button mt-auto mb-auto" onClick={handleRegister}>Sign
                            Up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {RegistrationPage}