define(require => {
    'use strict';

    const ModuleController = require('common/platform/ModuleController');

    return class extends ModuleController {
        getCommonString () {
            return this.getCommonLocaleString('currency.code');
        }
    }
});