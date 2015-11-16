import todos from './todos'
import {addTodo, deleteTodo} from '../actions'

const todo = {completed:false,text:'i am todo'}
const todo2 = {completed:true,text:'i am todo2'}

describe('todos reducer', () => {
  it('adds todo', () => {
    expect(
      todos([], addTodo(todo))
    ).to.deep.eql( [todo] )

    expect(
      todos([todo], addTodo(todo2))
    ).to.deep.eql( [todo, todo2] )
  })

  it('deletes todo', () => {
    expect(
      todos([todo, todo2], deleteTodo(todo))
    ).to.deep.eql( [todo2] )

    expect(
      todos([todo2], deleteTodo(todo2))
    ).to.deep.eql( [] )
  })
})