Ext.define('FormBuilder.view.Info',{
    extend:'Ext.form.Panel',
    xtype:'info',
    config:{
        title: 'Info',
        iconCls: 'info',
        styleHtmlContent: true,
        html: 'This is just a demo which load form data over rest and display details.',
        style:'text-align:center',
        items: [
         {
             xtype: 'image',
             src: 'resources/images/logo.png',
             cls: 'logo-img',
             style: 'width:200px;height:100px;margin:auto;background-size:contain'
         }
        ]
    }
});