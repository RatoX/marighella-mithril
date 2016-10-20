import Navigo from 'navigo'
import login from 'views/login'

var routing = function (mode) {
  let router = new Navigo('/', mode)
  router.on({
    'login/': function (params) {
      login()
    },
  })
  router.resolve()
  return router
}

var getMode = function () {
  var mode = 'history-api';
  var isLocalStorageSupported = !!window.localStorage;

  if (isLocalStorageSupported) {
    mode = localStorage.getItem('navigo') || mode;
  }

  isLocalStorageSupported && localStorage.setItem('navigo', mode);
  return mode;
};

window.onload = function(){
  let router = routing(getMode())
  router.navigate('/login/')
}
