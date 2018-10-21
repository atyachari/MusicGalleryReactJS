import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import Search from '../../containers/Album/Search';
import Login from '../../containers/Login/Login';
import AuthButton from '../../Authentication/AuthButton';
import PrivateRoute from './PrivateRoutes';

const Routing = () => {
  return(
    <div>
      <Router>
          <div className="App" style={{ paddingTop: '70px' }}>
            <AuthButton />
            {/* I have rendered few normal routes, then we rendered this PrivateRoute passing it a path and component,
               just as we normally would.  Then we spread all of the arguments that were passed to the component
               into that route.  We have this render method, so this is going to be invoked when the path matches
               and then if we're authenticated, we render the comonent just as we normally would*/}
            {/* It will take us to desired pages.*/}
            
            <Typography><Link to="/Music">Music Place</Link></Typography>

            {/* It will use the corresponding components for respective pages.*/}
            <Route path="/login" component={Login}/>
            {/* This is the private Route. So that user will only be able to
              access this page when he/she is authenticated*/}
            <PrivateRoute path='/Music' component={Search} />
        </div>
      </Router>
    </div>
  )
}

export default Routing;
