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
}

const ee = new EventEmitter();
ee.on('event1', () => console.log(1));
ee.on('event2', () => console.log(3));

ee.once('event1', () => console.log(4));

ee.emit('event1');
ee.emit('event1');
ee.emit('event2');
