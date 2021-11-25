import React from 'react';
import { Switch , Route , Redirect } from 'react-router-dom';
import Coins from './components/Coins'

export const Context = React.createContext()

const App = () => {


    return (
        <div>

                <Switch>
                    <Route path='/coins/:page' render={(props) => <Coins {...props}  />} />
                    <Redirect exact from='/' to='/coins/1' />
                </Switch>
        </div>
    );
};

export default App;