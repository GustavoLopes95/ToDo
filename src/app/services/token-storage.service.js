angular.module('todoApp.token.storage', [])
.factory('tokenStorage', function($window) {
  const tokenStorage = {};

  tokenStorage.storageToken = (tokenData) => {    
    $window.localStorage.setItem('token', JSON.stringify(tokenData));
  }

  tokenStorage.getToken = () => {
    const tokenData = $window.localStorage.getItem('token');
    return JSON.parse(tokenData) || null;
  }

  tokenStorage.removeToken = () => {
    $window.localStorage.removeItem('token');
  }

  return tokenStorage;
})