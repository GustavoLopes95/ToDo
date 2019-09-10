angular.module('todoApp.user.service',[
  'todoApp.api'
])
.factory('userService', function (api) {
  const userService = {};

  userService.get = (params = '') => {
    const service = 'user';

    return api.get(`${service}${params}`)
      .then((res) => {
        return res && res.data;
      })
      .catch((err) => {
          console.log(err);          
      });
  }

  return userService;
})