import { GoogleLogout } from 'react-google-login';

const clientId = "1084270193305-jmvlr2ddq8e0qv2km4u927sgpbfkrh60.apps.googleusercontent.com";

function Logout() {

const onSuccess = () => {
console.log("Log out successfull!");
}

return (
    <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        on LogoutSuccess={onSuccess}
        />
    </div>)
}
export default Logout;