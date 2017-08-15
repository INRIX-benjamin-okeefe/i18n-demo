define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');

    const
        LOCALE_DEMO = 'Locale demo',
        COMMON_STRINGS_DEMO = 'Common strings demo';

    return class extends ListChamber {
        getListConfig () {
            return {
                itemClick: (eventKey, lv, model, details) => {
                    if (model.text === LOCALE_DEMO) this.goto('locale-chamber');
                    if (model.text === COMMON_STRINGS_DEMO) this.goto('common-strings-chamber')
                }
            }
        }

        data () {
            return [
                { text: LOCALE_DEMO },
                { text: COMMON_STRINGS_DEMO }
            ];
        }
    }
});