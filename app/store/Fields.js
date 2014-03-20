Ext.define('FormBuilder.store.Fields', {
    extend: 'Ext.data.Store',
    config: {
        model: 'FormBuilder.model.Reference',
        //autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'https://api.raxa.io/ws/rest/v1/form/c05295a0-1691-11df-97a5-7038c432aabf',
            reader: {
                type: 'json',
                rootProperty: 'formFields'
            }
        },
        listeners: {
            load: function (store, recs) {
                //var rec = recs[0],
                //    products = rec.products();
                console.log(recs);
                //console.log(products);
                //console.log(products.getCount());
            }
        }

    }
});