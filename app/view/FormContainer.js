Ext.define('FormBuilder.view.FormContainer',{
    extend:'Ext.NavigationView',
    xtype:'formcontainer',
    config:{
        title:'Forms',
        iconCls: 'search',
        navigationBar: {
            items: [{
                iconCls: 'search',
                handler: function () {
                    Ext.Viewport.child('slidingmenu').toggle();
                }
            }]
        },
        items: [
            {
                xtype:'formlist'
            },
            {
                xtype: 'toolbar',
                docked:'bottom',
                items: [
                    {
                        xtype: 'button',
                        width: '32%',
                        text: 'Home',
                        centered: true
                    }
                ]
            }
        ]

    }
    
});