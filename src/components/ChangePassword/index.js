import React, { Component } from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss';
import styles from './styles';

class ChangePassword extends Component {
  render() {
    const { handleSubmit, classes } = this.props;
    return (
      <Form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.field}>Old Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'text'}
          name={'oldPassword'}
          placeholder={'Old Password'}
        />
        <label className={classes.field}>New Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'text'}
          name={'password'}
          placeholder={'New Password'}
        />
        <label className={classes.field}>Repeat Password</label>
        <Field
          className={classes.field}
          component={'input'}
          type={'text'}
          name={'coPassword'}
          placeholder={'Repeat Password'}
        />
        <button className={classes.field} type={'submit'}>
          Save
        </button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'changePassword' })(
  injectSheet(styles)(ChangePassword)
);
