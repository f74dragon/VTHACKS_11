import logo from './logo.svg';
import './App.css';
import LogoutButton from './components/logout';
import {gapi} from 'gapi-script';
import {useEffect} from 'react';
import LoginButton from './components/login';

const clientId = "1084270193305-jmvlr2ddq8e0qv2km4u927sgpbfkrh60.apps.googleusercontent.com";

function App() {
  useEffect (() => {
    function start() {
    gapi.client.init({
      clientId: clientId,
      scope: ""
    })
    };

    gapi.load('client:auth2', start);
    });


  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
