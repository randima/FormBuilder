Ext.define('FormBuilder.view.FormView', {    
    extend: 'Ext.form.Panel',
    xtype: 'formview',
    config: {
        layout: 'vbox',
        title: 'Form',
        count:0,
        items: [
            {
                xtype: 'detailscard',
            },
            {
                xtype: 'fieldset'
            }
        ]
    },
    
    addField:function(label) {
        var me = this;
        var newField = Ext.create('Ext.field.Text', {
            name: 'field' + me.getCount(),
            label: label,
            labelWidth:'50%'
        });
        me.getComponent(1).add(newField);
    }
});