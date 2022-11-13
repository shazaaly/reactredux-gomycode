import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';

import classes from './Auth.module.css';


export const Auth = () => {

  const dispatch = useDispatch()

  const submitHandler =()=>{dispatch(authActions.login())}


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

