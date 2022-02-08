import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity, updateEntity, createEntity, reset } from './cd.reducer';
import { ICd } from 'app/shared/model/cd.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { State } from 'app/shared/model/enumerations/state.model';

export const CdUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const cdEntity = useAppSelector(state => state.cd.entity);
  const loading = useAppSelector(state => state.cd.loading);
  const updating = useAppSelector(state => state.cd.updating);
  const updateSuccess = useAppSelector(state => state.cd.updateSuccess);
  const stateValues = Object.keys(State);
  const handleClose = () => {
    props.history.push('/cd' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.added = convertDateTimeToServer(values.added);

    const entity = {
      ...cdEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          added: displayDefaultDateTime(),
        }
      : {
          state: 'OK',
          ...cdEntity,
          added: convertDateTimeFromServer(cdEntity.added),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="jhipsterSampleApplication8App.cd.home.createOrEditLabel" data-cy="CdCreateUpdateHeading">
            Create or edit a Cd
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="cd-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Name"
                id="cd-name"
                name="name"
                data-cy="name"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Performer" id="cd-performer" name="performer" data-cy="performer" type="text" />
              <ValidatedField label="Release Year" id="cd-releaseYear" name="releaseYear" data-cy="releaseYear" type="text" />
              <ValidatedField label="Disc Count" id="cd-discCount" name="discCount" data-cy="discCount" type="text" />
              <ValidatedField label="Medium" id="cd-medium" name="medium" data-cy="medium" type="text" />
              <ValidatedField label="Label" id="cd-label" name="label" data-cy="label" type="text" />
              <ValidatedField label="State" id="cd-state" name="state" data-cy="state" type="select">
                {stateValues.map(state => (
                  <option value={state} key={state}>
                    {state}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Added"
                id="cd-added"
                name="added"
                data-cy="added"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/cd" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CdUpdate;
