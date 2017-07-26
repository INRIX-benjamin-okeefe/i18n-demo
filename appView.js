define(function (require) {
    'use strict';

    const ModuleView = require('common/platform/ModuleView');

    return class extends ModuleView {
        beforeStart () {
            this.goto('locale-chamber');
        }
    };
});
