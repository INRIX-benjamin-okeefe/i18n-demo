define(require => {
    'use strict';

    const ModuleController = require('common/platform/ModuleController');

    return class extends ModuleController {
        getCommonString () {
            this.getCommonLocaleString('currency.code').then(response => {
                Log.debug('This common string was requested by the app controller:', response);
            });
        }
    }
});