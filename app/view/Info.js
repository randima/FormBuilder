Ext.define('FormBuilder.view.Info',{
    extend:'Ext.form.Panel',
    xtype:'info',
    config:{
        title: 'Info',
        iconCls: 'info',
        styleHtmlContent: true,
        html: 'This is just a demo which fetch json data from a local file.',
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