import { Field, Form, Formik } from 'formik';
import * as React from 'react';

export interface IUserLoginProps {
  onSubmit: (event: any) => void;
}

export function UserLoginForm(props: IUserLoginProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">Login User</div>
      <div className="card-body">
        <Formik
          initialValues={{userName: '', password: ''}}
          onSubmit={props.onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label>User Name:
                  <Field className="form-control" type="text" name="userName" />
                </label>
              </div>
              <div className="form-group">
                <label>Password:
                  <Field className="form-control" type="password" name="password" />
                </label>
              </div>
              <div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                  disabled={isSubmitting}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

