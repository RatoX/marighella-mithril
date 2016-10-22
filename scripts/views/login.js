import { $ } from 'utils/util'

function binds(data) {
  return {onchange: function(e) {
    data[e.target.name] = e.target.value;
  }};
};

var Login = {
  controller: function() {
    return {
      model: {
        login: '',
        password: ''
      },
      submit: function(param, one){
        let model = this.model
        m.route('/noticias')
      }
    }
  },
  view: function(controller) {
    return m('section.login', [
      m('h1','Mithril Test'),
      m('figure'),
      m('section', binds(controller.model), [
        m('label[for=login]', 'Login'),
        m('input[name=login][type=text]', {value: controller.model.login}),
        m('label[for=password]', 'Password'),
        m('input[name=password][type=password]', {value: controller.model.password}),
        m("button", {onclick: controller.submit.bind(this)})
      ])
    ]);
  }
}

export default Login
