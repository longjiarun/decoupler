!(function() {
    'use strict'

    var handlers = {}

    var on = function(name, handler) {
        var events = handlers[name]

        if (typeof handler === 'function') {
            !events && (events = [])
            events.push(handler)

            handlers[name] = events
        }

        return this
    }

    var off = function(name, handler) {
        var events = handlers[name]

        if (!handler) {
            events = null
        } else if (events) {
            for (var i = 0, l = events.length; i < l; i++) {
                if (events[i] === handler) {
                    events.splice(i, 1)
                }
            }
        }
        handlers[name] = events

        return this
    }

    var emit = function(name, args) {
        var events = handlers[name],l

        if (events && (l = events.length )) {
            for (var i = 0; i < l; i++) {
                events[i] && events[i].call(null, args)
            }
        }

        return this
    }

    var decoupler = {
        on: on,
        off: off,
        emit: emit
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = decoupler
    } else {
        window.decoupler = decoupler
    }
})()
