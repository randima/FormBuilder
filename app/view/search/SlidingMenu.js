Ext.define('FormBuilder.view.search.SlidingMenu', {
    extend: 'Ext.Container',
    xtype: 'slidingmenu',
    config: {
        cls: 'slidingmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 266,
        padding: '97 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left',
            ui: 'slidingmenu',
        },
        items: [
        {
            xtype: 'component',
            cls: 'divider',
            html: 'Search by'
        },{
            text: 'Name',
            iconCls: 'ico-schedule'
        }, {
            text: 'Doctor',
            iconCls: 'ico-speakers'
        }, {
            text: 'Date',
            iconCls: 'ico-sponsors'
        }, {
            xtype: 'component',
            cls: 'divider',
            html: 'Filter by'
        }, {
            text: 'Ratings',
            //ui: 'slidingmenu',
            iconCls: 'ico-maps',
            href: '#maps'
        }]
    },

    setParent: function (parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype: 'component',
            cls: 'slidingmenu-mask',
            top: 0,
            zIndex: 5000,
            hidden: true,
            width: 9999,
            left: this.getWidth(),
            bottom: 0
        });

        this.maskCmp.element.on({
            scope: this,
            touchend: 'onMaskRelease'
        });
    },

    onMaskRelease: function () {
        this.setOpen(false);
    },

    onDestroy: function () {
        this.maskCmp.destroy();
        delete this.maskCmp;

        this.callParent(arguments);
    },

    toggle: function () {
        this.setOpen(!this.getOpen());
    },

    updateOpen: function (open) {
        var targetEl,
            parentCt = this.up();

        if (!parentCt) {
            return;
        }

        targetEl = parentCt.innerElement;

        if (open) {
            targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});