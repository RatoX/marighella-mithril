import Login from 'views/login'

m.route.mode = "hash";

m.route(document.querySelector('body > main'), '/', {
    '/': Login,
    '/login': Login,
});
