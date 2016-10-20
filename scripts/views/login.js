import { $ } from 'utils/util'

function binds(data) {
  return {onchange: function(e) {
    data[e.target.name] = e.target.value;
  }};
};

var Login = {
  model: {
    login: '',
    password: ''
  },
  controller: function() {
    return {
      submit: function(param, one){
        let model = this.model
        debugger
      }
    }
  },
  view: function(controller) {
    return m('section.login', [
      m('h1','Mithril Test'),
      m('figure'),
      m('form', binds(this.model), [
        m('label[for=login]', 'Login'),
        m('input[name=login][type=text]', {value: this.model.login}),
        m('label[for=password]', 'Password'),
        m('input[name=password][type=password]', {value: this.model.password}),
        m("button", {onclick: controller.submit.bind(this)})
      ])
    ]);
  }
}

export default Login
