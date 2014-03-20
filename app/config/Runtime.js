/**
 * @class Runtime
 *
 * Creates `Runtime` singleton instances which let you work with global data.
 *
 * If you want global variables or setting through out the application you can
 * Runtime.js class. This class can be refered by calling Makto.config
 */
Ext.define('FormBuilder.config.Runtime', {
    singleton: true,

    config: {
        domain: 'https://api.raxa.io',
       // orientation: window.orientation == (-90 || 90) ? 'landscape' : 'portrait',
      
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    getURL: function () {
        return uri.replace("NEED-TO-CONFIGURE", this.getDomain());
    }

}, function () {
    FormBuilder.config = this;
}
);