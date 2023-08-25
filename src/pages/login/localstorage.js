// utils/localStorageUtils.js

const USER_KEY = 'user';

export function saveUserToLocalStorage(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUserFromLocalStorage() {
  const userString = localStorage.getItem(USER_KEY);
  return userString ? JSON.parse(userString) : null;
}
