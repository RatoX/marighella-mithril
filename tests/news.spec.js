import { expect } from 'chai'
import m from 'mithril'
import mq from 'mithril-query'
import News from '../scripts/views/news'

global.m = m

describe('News', () => {

  it('should do something', ()=>{
    expect(true).to.be.true
  })

  it('should create a table', ()=>{
    var output = mq(News.view(News.controller()))

    expect(output.has('table')).to.be.true
  })

})
