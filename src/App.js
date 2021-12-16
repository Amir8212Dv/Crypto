import React from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import Landing from './components/Landing'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Context = React.createContext()

const App = () => {


    return (
        <div className='container-fluid p-0'>
                <Switch>
                    <Route path='/coins/:page' render={(props) => <Landing {...props}  />} />
                    <Redirect exact from='/' to='/coins/1' />
                </Switch>
        </div>
    );
};

export default App;