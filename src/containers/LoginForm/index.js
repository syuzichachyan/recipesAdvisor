import { reduxForm } from 'redux-form';
import Login from '../../components/LoginForm';
import validate from '../../config/SignUpValidation/validtion';

let LoginForm = reduxForm({
  form: 'Login',
  validate
})(Login);

export default LoginForm;
