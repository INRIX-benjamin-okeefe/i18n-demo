define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        getListConfig () {
            return {
                layout: 'hero'
            }
        }
        data () {
            const 
                greeting = this.getLocaleString('locale.greeting'),
                formattedGreeting = this.getStandardFormat(`${greeting}$1`, '!');

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