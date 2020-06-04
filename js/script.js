window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let calc = require('./calc'),
        form = require('./form'),
        slider = require('./slider'),
        tabs = require('./tabs'),
        timer = require('./timer'),
        modal = require('./modal');

    calc();
    form();
    slider();
    tabs();
    timer();
});