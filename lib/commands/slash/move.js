"use strict";

const event = require('./lib/event');

module.exports = (args, msg) => {
    return event("move", msg)
};
