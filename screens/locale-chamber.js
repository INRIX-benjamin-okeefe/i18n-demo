define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        getListConfig () {
            return {
                layout: 'hero'
            }
        }

        init(screen) {
            return super.init(screen).then(() => {
                this.controller = this.moduleView.getController();
            });
        }

        beforeStart () {
            return super.beforeStart().then(() => {
                this.getCommonLocaleString(['currency.symbol', 'currency.code', 'language.country', 'language.code']).then(response => {
                    Log.debug('These common strings were requested by the app:', response);
                }).then(() => {
                    return this.getCommonLocaleString('currency.symbol').then(response => {
                        Log.debug('This common string was requested by the app:', response);
                    });
                }).then(() => {
                    return this.controller.getCommonString();
                });
            });
        }

        data () {
            const 
                greeting = this.getLocaleString('locale.greeting'),
                formattedGreeting = this.formatString(`${greeting}$1`, '!');

            return [
                {
                    text: formattedGreeting,
                    text1: this.getLocaleString('locale.english'),
                    icon: `${MODULE_PATH}/images/${this.getLocaleString('locale.flag')}`
                }
            ]
        }
    }
});