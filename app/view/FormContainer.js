Ext.define('FormBuilder.view.FormContainer',{
    extend:'Ext.NavigationView',
    xtype:'formcontainer',
    config:{
        title:'Forms',
        iconCls:'search',
        items:[
            {
                xtype:'formlist'
            }
        ]

    }
});