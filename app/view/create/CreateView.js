Ext.define('FormBuilder.view.create.CreateView', {
    extend: 'Ext.Container',
    xtype: 'createview',
    config: {
        layout:'fit',
        items: [
            {
                xtype: 'toolbar',
                title:'Create Your Form',
                docked: 'top',
            },
            {
                xtype: 'formpanel',
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'name',
                                label: 'Name'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked:'bottom',
                items: [
                    {
                        xtype: 'button',
                        width: '32%',
                        text: 'Add Field'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Add Concept',
                        width: '32%',
                    }

                ]

            }
        ]
    }
});
