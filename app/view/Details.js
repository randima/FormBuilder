Ext.define('FormBuilder.view.Details',{
    extend:'Ext.form.Panel',
    xtype:'details',
    config:{
        title:'More Info',
        tpl:'{uri}',

        data:null
    }
});