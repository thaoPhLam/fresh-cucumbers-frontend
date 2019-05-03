import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

export const makeMainRoutes = () => {
    return (

            <div>
                <Route path="/" render={(props) => <App auth={auth} {...props} />} />
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </Router>
    );
};