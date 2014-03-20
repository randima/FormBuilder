Ext.define('FormBuilder.view.search.SearchView', {
    extend: 'Ext.Container',
    xtype: 'searchview',
    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Sliding Menu',
                items: [{
                    iconCls: 'search',
                    handler: function () {
                        Ext.Viewport.child('slidingmenu').toggle();
                    }
                }]
            },
            {
                xtype: 'formcontainer'
            }
        ]
    }
});
