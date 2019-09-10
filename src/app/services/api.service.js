angular.module('todoApp.api', [
  'todoApp.auth'
])
.factory('api', function($http, auth) {
  const api = {};

  api.getActionEndpoint = (action) => {
    const actionEndpoint = `${BASE_ENDPOINT}/${action}`;
    return actionEndpoint;
  }

  api.createHeader = () => {
    const token = auth.getToken();
    //console.log(token);   

    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  api.get = (service) => {
    const headers = api.createHeader();
    const url = api.getActionEndpoint(service);

    return $http.get(url, { headers });
  }

  api.post = (url, data) => {
    const headers = api.createHeader();

    return $http.get(url, data, { headers });
  }

  return api;
})