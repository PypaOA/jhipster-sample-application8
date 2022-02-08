import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Cd from './cd';
import Dvd from './dvd';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}cd`} component={Cd} />
      <ErrorBoundaryRoute path={`${match.url}dvd`} component={Dvd} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
