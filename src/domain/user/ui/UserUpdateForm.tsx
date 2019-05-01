import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { IUser } from '../User';

export interface IUserFormProps {
  onSubmit: (values: any, actions: any) => void;
  user: IUser;
}

export function UserUpdateForm(props: IUserFormProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-header">Submit User</div>
      <div className="card-body">
        <Formik initialValues={{ user: props.user }} onSubmit={props.onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label>User Name:
                  <Field className="form-control" type="text" name="user.userName" />
                </label>
                <ErrorMessage name="user.userName" />
              </div>
              <div className="form-group">
                <label>First Name:
                  <Field className="form-control" name="user.firstName" />
                </label>
                <ErrorMessage name="user.firstName" />
              </div>
              <div className="form-group">
                <label>Last Name:
                  <Field className="form-control" type="text" name="user.lastName" />
                </label>
                <ErrorMessage name="user.lastName" />
              </div>
              <div className="form-group">
                <label>E-mail:
                  <Field className="form-control" type="text" name="user.eMail" />
                </label>
                <ErrorMessage name="user.eMail" />
              </div>
              <div className="form-group">
                <label>Password:
                  <Field className="form-control" type="password" name="user.password" />
                </label>
                <ErrorMessage name="user.password" />
              </div>
              <div className="checkbox">
                <Field type="checkbox" name="user.adminUser" />
                <label>Admin User</label>
              </div>
              <div>
                <input className="btn btn-primary" type="submit" value="Submit" disabled={isSubmitting} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
