import './App.css';

import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { SignUp } from './pages/SignUp/SignUp';

function App() {
    const PrivateRoute = (props) => {
        return props.isUser ? (
            <Route component={props.component} path={props.path} />
        ) : (
            <Redirect to='/signup' />
        );
    };
    return (
        <Router>
            <div className='App'>
                <AppHeader />
                <Switch>
                    <Route
                        render={(props) => (
                            <SignUp isUser={props.isUser} {...props} />
                        )}
                        path='/signup'
                    />
                    <PrivateRoute
                        component={ContactEditPage}
                        isUser={true}
                        path='/contact/edit/:id?'
                    />
                    <PrivateRoute
                        component={ContactDetailsPage}
                        isUser={true}
                        path='/contact/:id'
                    />
                    <PrivateRoute
                        component={StatisticPage}
                        isUser={true}
                        path='/statistic'
                    />
                    <PrivateRoute
                        component={ContactPage}
                        isUser={true}
                        path='/contact'
                    />

                    <PrivateRoute
                        component={HomePage}
                        isUser={true}
                        path='/'
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
