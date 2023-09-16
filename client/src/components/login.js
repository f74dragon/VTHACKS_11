import {GoogleLogin} from 'react-google-login'

const clientId = "1084270193305-jmvlr2ddq8e0qv2km4u927sgpbfkrh60.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
        }
        const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
        }


    return(
        <div id="signInButton">
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookie Policy={'single_host_origin'}
        issignedIn={true}
        />
        </div>
    )   
}

export default Login;