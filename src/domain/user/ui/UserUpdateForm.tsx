import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { IUser } from '../User';

export interface IUserFormProps {
  onSubmit: (values: IUser, actions: any) => void;
  user: IUser;
}

const validate = (values: IUser) => {
  const errors: any = {};

  if (!values.userName) {
    errors.userName = 'User Name required';
  } else if (values.userName.length < 8) {
    errors.userName = 'User Name must be at least 8 characters long';
  }

  return errors;
}

export function UserUpdateForm(props: IUserFormProps): JSX.Element {
  const { onSubmit, user } = props;
  return (
    <div className="card">
      <div className="card-header">Submit User</div>
      <div className="card-body">
        <Formik initialValues={user} onSubmit={onSubmit} validate={validate}>
          {({ isSubmitting, errors }) => (
            <Form>
              <div className="form-group">
                <label>User Name:
                  <Field className="form-control" type="text" name="userName" />
                </label>
                <ErrorMessage name="userName" component="small" className="form-text text-danger" />
              </div>
              <div className="form-group">
                <label>First Name:
                  <Field className="form-control" name="firstName" />
                </label>
                <ErrorMessage name="firstName" component="small" className="form-text text-danger" />
              </div>
              <div className="form-group">
                <label>Last Name:
                  <Field className="form-control" type="text" name="lastName" />
                </label>
                <ErrorMessage name="lastName" component="small" className="form-text text-danger" />
              </div>
              <div className="form-group">
                <label>E-mail:
                  <Field className="form-control" type="text" name="eMail" />
                </label>
                <ErrorMessage name="eMail" component="small" className="form-text text-danger" />
              </div>
              <div className="form-group">
                <label>Password:
                  <Field className="form-control" type="password" name="password" />
                </label>
                <ErrorMessage name="password" component="small" className="form-text text-danger" />
              </div>
              <div className="checkbox">
                <Field type="checkbox" name="adminUser" component="div"/>
                <label>Admin User</label>
              </div>
              <div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                  disabled={isSubmitting || !!Object.keys(errors).length} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
