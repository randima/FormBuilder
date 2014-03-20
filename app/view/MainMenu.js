Ext.define('FormBuilder.view.MainMenu', {
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        layout: 'vbox',
        cls:'mainview-panel',
        items: [
            {
                title: 'No More Papers',
                xtype: 'toolbar'
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: 'Create forms or see forms already created.',
                styleHtmlCls:'main-info-html',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/logo.png',
                        cls: 'logo-img',
                        style: 'width:200px;height:100px;margin:auto;background-size:contain'
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
                        text: 'Create'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Search',
                        width: '32%',
                    }

                ]

            }
        
        
        ]
    }
});
