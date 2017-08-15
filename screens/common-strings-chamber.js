define(require => {
    const ListChamber = require('common/platform/chamber/ListChamber');

    return class extends ListChamber {
        _mapValues (values) {
            let result = '', 
                keys = Object.keys(values);

            keys.forEach((key, i) => {
                result += `${values[key]}${i < keys.length ? ', ' : ''}`;
            });

            return result;
        }

        init(screen) {
            return super.init(screen).then(() => {
                this.controller = this.moduleView.getController();
            });
        }

        data () {
            const asyncCalls = [
                this.getCommonLocaleString(['currency.symbol', 'currency.code', 'language.country', 'language.code']),
                this.getCommonLocaleString('currency.symbol'),
                this.controller.getCommonString()
            ];

            return new Promise((resolve, reject) => {
                Promise.all(asyncCalls).then(values => {
                    const returnData = [
                        { 
                            text: JSON.stringify(values[0]), //this._mapValues(values[0]),
                            text1: 'Calling getCommonLocaleString with an array of tokens'
                        },
                        { 
                            text: values[1],
                            text1: 'Calling getCommonLocaleString with a single token'
                        },
                        { 
                            text: values[2],
                            text1: 'Calling getCommonLocaleString with a single token from the controller'
                        }
                    ]

                    resolve(returnData);
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
});