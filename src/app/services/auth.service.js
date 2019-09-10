angular.module('todoApp.auth', [
  'todoApp.token'
])
.factory('auth', function($http, tokenService) {
  const auth = {};
  const module = 'auth';
 
  auth.getToken = () => {
    return tokenService.getToken();
  }
  
  auth.authenticate = (credentials) => {
    const method = 'authorize';
    const service = `${module}/${method}`;
    const url = auth.getActionEndpoint(service);
    const headers = auth.createHeader(credentials);

    const { username, password } = credentials;
    return $http.post(url, { username, password }, {headers})
      .then((res) => {                
        auth.createToken(res);
        return true;
      })
      .catch(err => {
        return auth.handleResponseError(err)
      });
  }

  auth.createToken = ({data: { token: token }}) => {
    const tokenData = {
      expiresAt: moment().add(10, 'm'),
      payload: token
    };
    tokenService.storageToken(tokenData);
  }

  auth.createHeader = () => {    
    return {
      'Content-Type': 'application/json'
    }
  }

  auth.getActionEndpoint = (action) => {
    const actionEndpoint = `${BASE_ENDPOINT}/${action}`;
    return actionEndpoint;
  }

  auth.isTokenValid = () => {
    const expiration = moment(tokenService.expirateTime());
    const isValid = expiration - moment() > 0;
    return isValid;
  }

  
  auth.logout = () => {
    const method  = 'logout';
    const service = `${module}/${method}`;
    const url = auth.getActionEndpoint(service);

    const headers = auth.createHeader();
    const token   = auth.getToken();
    if(token == null) return true;

    headers.Authorization = `Bearer ${token}`;
    $http.get(url, { },{ headers })
    tokenService.removeToken();
  }

  
  auth.handleResponseError = (err) => {
    const {data: error} = err;    
    const sweetAlertConfig = {
      title: "Oops!",
      text: error.error,
      icon: "error",
    }
    
    swal(sweetAlertConfig);
    return false;
  }

  return auth;
});