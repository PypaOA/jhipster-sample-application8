import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Dvd from './dvd';
import DvdDetail from './dvd-detail';
import DvdUpdate from './dvd-update';
import DvdDeleteDialog from './dvd-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DvdUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DvdUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DvdDetail} />
      <ErrorBoundaryRoute path={match.url} component={Dvd} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DvdDeleteDialog} />
  </>
);

export default Routes;
