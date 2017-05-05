define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        Button = require('common/ui/Button'),
        LocaleStrings = require('common/lib/LocaleStrings');

    /**
     * This is the application's root view, which is used for any UI control creation and handling.
     *
     * Note that functions defined in the controller may be called via this.getController()
     * Functions declared in this view class may also be called from the controller.
     * Functions designed to be called from the controller must return a Promise.
     *
     * @see Application Lifecycle {@link https://insidetrack.opencar.com/documentation/2.2/lifecycle}
     * @see Views & Controllers {@link https://insidetrack.opencar.com/documentation/2.2/controllers_and_views}
     * @see Promises {@link https://insidetrack.opencar.com/documentation/2.2/promises}
     */
    return class extends ModuleView {
        loadI18n (languageRegionCode) {
            return this.i18n.load('i18n', languageRegionCode);
        }

        init () {
            return super.init(...arguments).then(() => {
                this.i18n = new LocaleStrings();
                this.i18n.setLocalizationBasePath(`${window.MODULE_PATH}/i18n`);
            });
        }

        beforeStart () {
            return super.beforeStart().then(() => {
                this.loadI18n('en-us').then(() => {
                    this.renderButtons();
                });
            });
        }

        buttonClickHandler (languageRegionCode) {
            this.loadI18n(languageRegionCode).then(() => {
                const view = this.getView();

                while (view.hasChildNodes()) {
                    view.removeChild(view.lastChild);
                }

                this.renderButtons();
            });
        }

        renderButtons () {
            const locales = [
                { language: this.i18n.getString('i18n.button.english.text'), code: 'en-us' },
                { language: this.i18n.getString('i18n.button.japanese.text'), code: 'jp-jp' },
                { language: this.i18n.getString('i18n.button.spanish.text'), code: 'es-es' },
                { language: this.i18n.getString('i18n.button.canada.text'), code: 'en-ca' }
            ];

            locales.forEach(locale => {
                new Button({
                    model: {
                        text: locale.language
                    },
                    click: () => {
                        this.buttonClickHandler(locale.code);
                    }
                }).render(this.getView());
            });
        }
    };
});
