import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as React from 'react';
import { IUser } from '../User';

export interface IUserFormProps {
  onSubmit: (values: IUser, actions: any) => void;
  user: IUser;
}

const validate = (values: IUser) => {
  const errors: any = {};

// tslint:disable-next-line: no-console
  console.log(JSON.stringify(values));

  errors.userName = 'something wrong';

  return errors;
}

export function UserUpdateForm(props: IUserFormProps): JSX.Element {
  const { user } = props;
  return (
    <div className="card">
      <div className="card-header">Submit User</div>
      <div className="card-body">
        <Formik initialValues={ user } onSubmit={props.onSubmit} validate={validate}>
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label>User Name:
                  <Field className="form-control" type="text" name="userName" />
                </label>
                <ErrorMessage name="userName" component="div"/>
              </div>
              <div className="form-group">
                <label>First Name:
                  <Field className="form-control" name="firstName" />
                </label>
                <ErrorMessage name="firstName" component="div"/>
              </div>
              <div className="form-group">
                <label>Last Name:
                  <Field className="form-control" type="text" name="lastName" />
                </label>
                <ErrorMessage name="lastName" component="div"/>
              </div>
              <div className="form-group">
                <label>E-mail:
                  <Field className="form-control" type="text" name="eMail" />
                </label>
                <ErrorMessage name="eMail" component="div"/>
              </div>
              <div className="form-group">
                <label>Password:
                  <Field className="form-control" type="password" name="password" />
                </label>
                <ErrorMessage name="password" />
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
                  disabled={isSubmitting} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
