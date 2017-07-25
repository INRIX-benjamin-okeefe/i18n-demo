define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        getListConfig () {
            return {
                layout: 'hero'
            }
        }
        data () {
            return [
                {
                    text: this.getLocaleString('locale.greeting'),
                    text1: this.getLocaleString('locale.english'),
                    icon: `${MODULE_PATH}/images/${this.getLocaleString('locale.flag')}`
                }
            ]
        }
    }
});