import { login, logout } from '../../services/authService';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Login Action
export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user and check credentials
      const user = users.find(u => 
        u.username === username && 
        u.password === password
      );

      if (!user) {
        // For debugging
        console.log('Stored users:', users);
        console.log('Attempted login with:', { username, password });
        throw new Error('Invalid credentials');
      }

      // Create and store token
      const token = btoa(user.username + Date.now());
      
      // Store user session
      localStorage.setItem('token', token);
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        username: user.username,
        email: user.email
      }));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { 
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }, 
          token 
        }
      });

      return true;
    } catch (error) {
      console.error('Login error:', error);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message
      });
      throw error;
    }
  };
};

// Signup Action
export const signupUser = (userData) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some(user => user.username === userData.username || user.email === userData.email)) {
        throw new Error('Username or email already exists');
      }

      const newUser = {
        id: Date.now(),
        username: userData.username,
        email: userData.email,
        password: userData.password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      dispatch({
        type: SIGNUP_SUCCESS,
        payload: { message: 'Signup successful' }
      });

      return true;
    } catch (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.message
      });
      throw error;
    }
  };
};

// Logout Action
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  return { type: LOGOUT };
};
