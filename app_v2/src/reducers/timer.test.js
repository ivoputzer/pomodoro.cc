import timer from './timer'
import {startTimer, resumeTimer, stopTimer, tickTimer} from '../actions'
describe('timer reducer', () => {
  const dummyAction = {type:'DUMMY', payload:{}}
  it('default state is "00:00"', () => {
    expect( timer(undefined, dummyAction) )
      .to.eql( '00:00' )
  })
  it('starts timer', () => {
    const action = startTimer(25,'pomodoro')
    expect( timer(undefined, action) )
      .to.eql( '25:00' )
  })

  it.skip('resumes timer', () => {
    const startTimerAction = startTimer(25,'pomodoro')
    const action = resumeTimer(startTimerAction.payload)

    expect( timer('00:00', action) )
      .to.eql( '25:00' )
  })

  it('stops timer', () => {
    const action = stopTimer()
    expect( timer('12:34', action) )
      .to.eql( '00:00' )
  })

  it('ticks timer', () => {
    const action = tickTimer(25*60-1)

    expect( timer('25:00', action) )
      .to.eql( '24:59' )
  })
})
