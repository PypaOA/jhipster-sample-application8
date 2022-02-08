import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Cd from './cd';
import CdDetail from './cd-detail';
import CdUpdate from './cd-update';
import CdDeleteDialog from './cd-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CdUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CdUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CdDetail} />
      <ErrorBoundaryRoute path={match.url} component={Cd} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CdDeleteDialog} />
  </>
);

export default Routes;
