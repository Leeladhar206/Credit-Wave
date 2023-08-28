

const USER_KEY = 'user';

export function saveUserToLocalStorage(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUserFromLocalStorage() {
  const userData = localStorage.getItem(USER_KEY);
  return userData ? JSON.parse(userData) : [];
}
