var dummy1 = {
  _id: '580a9b325f2dde7d3e916b6e',
  updated_at: '2016-10-21T22:48:18.171Z',
  created_at: '2016-10-21T22:48:18.171Z',
  body:null,
  filename: '2016-10-21-daada.md',
  metadata: {
    date: '2016-10-21T21:06:26-02:00',
    tags:[] ,
    hat: 'aaa',
    title: 'daada',
    support_line: 'dwwd',
    menu: 'agronegÃ³cio',
    section: 'cover',
    images_hd:'/ /farm9.staticflickr.com/8796/17306389125_7f60267c76_b.jpg',
    layout: 'post',
    files: [
      {
        'lin k':'//farm9.staticflickr.com/8796/17306389125_7f60267c76_b.jpg',
        thumbnail:'/ /farm9.staticflickr.com/8796/17306389125_7f60267c76_t.jpg',
        medium:'/ /farm9.staticflickr.com/8796/17306389125_7f60267c76_z.jpg',
        small:'/ /farm9.staticflickr.com/8796/17306389125_7f60267c76_n.jpg',
        title: 'Carlos_Marighella.jpg'
      }
    ],
    created_date: '2016-10-21T21:07:13-02:00',
    published: false,
    releated_posts:[]
  },
}

var data = [
  dummy1,
]

var createRow = function(raw){
  let metadata = raw.metadata || {};
  return m('tr', [
		m('td', metadata['title']),
		m('td', m('a[href=/noticias/'+raw['_id']+']', {config: m.route}, 'edit')),
  ])
}

var News = {
  controller: function() {
    return {
      submit: function(param, one){
      }
    }
  },
  view: function(controller) {
    let thead = m('thead', m('tr', [
      m('th', 'Titulo'),
      m('th', 'Id')
    ]))

    let rows  = data.map(createRow)
    let tbody = m('tbody', rows)

    return m('section.news', [
      m('h1', 'Notícias'),
      m('table.news', [
        thead,
        tbody
      ])
    ])
  }
}

export default News
