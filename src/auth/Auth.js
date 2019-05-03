import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-5573q58s.eu.auth0.com',
        clientID: 'Vt47D2HGGMYhRrT2aRQvMeRmwEZNlV4m',
        redirectUri: 'http://localhost:3000',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}