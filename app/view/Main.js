Ext.define('FormBuilder.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype:'formcontainer'
            },
            {
                xtype:'info'
            }
        ]
    }
});
