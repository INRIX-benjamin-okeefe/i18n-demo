define(require => {
    'use strict';

    const ModuleView = require('common/platform/ModuleView');

    return class extends ModuleView {
        started () {
            return super.started(...arguments).then(() => {
                this.goto('home-chamber');
            });
        }
    };
});
