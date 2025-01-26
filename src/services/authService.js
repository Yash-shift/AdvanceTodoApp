export const login = (username, password) => {
  // Mock authentication logic
  if (username === 'user' && password === 'password') {
    localStorage.setItem('auth', JSON.stringify({ username }));
    return { username };
  }
  throw new Error('Invalid credentials');
};

export const logout = () => {
  localStorage.removeItem('auth');
};

export const isAuthenticated = () => {
  return localStorage.getItem('auth') !== null;
};
