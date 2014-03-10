Ext.define('FormBuilder.model.FormDetails', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'version', type: 'string' }
        ]
    }
});