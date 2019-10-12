import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';

export interface IUserLoginProps {
  onSubmit: (event: any) => void;
}

const validate = (values: any):any => {
  const errors: any = {};

  if (!values.userName) {
    errors.userName = 'User Name required';
  }

  if (!values.password) {
    errors.password = 'Password required';
  }

  return errors;
};

export function UserLoginForm(props: IUserLoginProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">Login User</div>
      <div className="card-body">
        <Formik
          initialValues={{userName: '', password: ''}}
          onSubmit={props.onSubmit}
          validate={validate}>
          {({ errors, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label>User Name:
                  <Field className="form-control" type="text" name="userName" />
                </label>
                <ErrorMessage name="userName" component="small" className="form-text text-danger" />
              </div>
              <div className="form-group">
                <label>Password:
                  <Field className="form-control" type="password" name="password" />
                </label>
                <ErrorMessage name="password" component="small" className="form-text text-danger" />
              </div>
              <div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                  disabled={isSubmitting || !!Object.keys(errors).length}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

