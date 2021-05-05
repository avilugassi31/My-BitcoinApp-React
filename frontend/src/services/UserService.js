// import { storageService } from './async-storage.service';
import { httpService } from './http.service';
const USER_KEY = 'user';
const USER_URL = 'user/';
const AUTH_URL = 'auth/';

export const userService = {
    getUser,
    getLoggedUser,
    signup,
    login,
    logout,
    addMove,
    getById,
};

function addMove(move) {
    const user = getUser();
    console.log('user:', user);
    user.moves.unshift(move);
    user.coins -= move.amount;
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    // console.log(' user.moves:',  user.moves)
    httpService.put(USER_URL);
    return move;
}

function getUser() {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    console.log('user:', user);
    return user;
    // return httpService.get(USER_URL);
}
function getById(id) {
    return httpService.get(USER_URL + id);
}
function getLoggedUser() {
    const user = JSON.parse(sessionStorage.getItem('login'));
    return user;
}
function signup(user) {
    console.log('user:', user);
    user.createdAt = Date.now();
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return httpService.post(AUTH_URL + 'signup', user);
    // localStorage.setItem(USER_KEY, JSON.stringify(userName));
}

async function login(user) {
    const userFromBack = await httpService.post(AUTH_URL + 'login', user);
    sessionStorage.setItem('login', JSON.stringify(userFromBack));
    return userFromBack;
}
function logout() {
    sessionStorage.clear();
    return httpService.post(AUTH_URL + 'logout');
}
