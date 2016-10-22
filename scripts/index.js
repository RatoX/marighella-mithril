import Login from 'views/login'
import News from 'views/news'

m.route.mode = "hash";

m.route(document.querySelector('body > main'), '/', {
    '/': Login,
    '/login': Login,
    '/noticias': News,
});
