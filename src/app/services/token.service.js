angular.module('todoApp.token', [
  'todoApp.token.storage'
])
.factory('tokenService', function($window, tokenStorage) {
    const tokenService = {};

    tokenService.storageToken = (payload) => {
      if(payload && payload.length === 0) return false;

      tokenStorage.storageToken(payload);
    }

    tokenService.getToken = () => {
      const tokenData = tokenStorage.getToken();
      return tokenData && tokenData.payload;
    }

    tokenService.expirateTime = ()  => {
      const tokenData = tokenStorage.getToken();
      return tokenData && tokenData.expiresAt;
    }

    tokenService.removeToken = () => {
      tokenStorage.removeToken();
    }

    return tokenService;
  })