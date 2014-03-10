Ext.define('FormBuilder.view.FormView', {    
    extend: 'Ext.form.Panel',
    xtype: 'formview',
    config: {
        layout: 'vbox',
        title: 'Form',
        items: [
            {
                xtype:'detailscard'
            },
            {
                xtype: 'fieldset',
                //title: 'Patient',
                items: [
                {
                    xtype: 'textfield',
                    name : 'familyname',
                    label: 'Faimily Name'
                },
                {
                    xtype: 'textfield',
                    name : 'givenname',
                    label: 'Given Name'
                },
                {
                    xtype: 'textfield',
                    label: 'birthday',
                    component: { type: 'date' }
                }
                    
                
                ]
            }
        ]
    }
});