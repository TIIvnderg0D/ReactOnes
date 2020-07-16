class EventEmitter {
  constructor() {
    this.events = {}
  }

  newEvent(eventName, func, options) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push({ func, options })
  }

  emit(eventName) {
    this.events[eventName].forEach((eventObj) => {
        eventObj.func();
        if (eventObj.options.isOnce) {
          this.delete(eventName, eventObj)
        }
      } 
    )
  }

  delete(eventName, eventObj) {
    let index = this.events[eventName].indexOf(eventObj)
    this.events[eventName].splice(index, 1)
  }

  on(eventName, func) {
    const options = {}
    this.newEvent(eventName, func, options)
  }

  once(eventName, func) {
    const options = { isOnce: true }
    this.newEvent(eventName, func, options)
  }

  /*double(eventName, func) {
    const options = { isDouble: true }
    this.newEvent(eventName, func, options)
  }*/

}

const ee = new EventEmitter();
ee.on('event1', () => console.log(1));
ee.on('event2', () => console.log(3));

ee.once('event1', () => console.log(4));

ee.emit('event1');
ee.emit('event1');
ee.emit('event2');


/* My

class EventEmitter {
  constructor() {
    this.events = [];
  }

  emit(event) {
    this.events.map((e) => {
      if (event === e.name) {
        if (e.runned >= 1 && e.repeatable === false) return;
        e.action();
        e.runned++
      }
    })
  }

  on(event, func) {
    this.newEvent(event, func, true)
  }

  once(event, func) {
    this.newEvent(event, func, false)
  }

  newEvent(event, func, repeat) {
    let newEvent = {
      name: event,
      action: func,
      runned: 0,
      repeatable: repeat === true ? true : false,
    }
    this.events.push(newEvent);
  }
}*/
