Ext.define('FormBuilder.controller.MainMenu', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainMenu: 'mainmenu',
            searchView: 'searchview',
            createView:'createview',
            buttons: 'mainmenu button',
            homeBtn:'formcontainer toolbar button'
        },
        control: {
            buttons: {
                tap: function (btn, e, opt) {
                    console.log(btn.getText());
                    if (btn.getText() === 'Search') {
                        this.goToSearchView();
                    }else if (btn.getText() === 'Create') {
                        this.goToCreateView();
                    }
                }
            },
            homeBtn: {
                tap:function(btn, e, eopt) {
                    if (btn.getText() === 'Home') {
                        this.goToMainMenuView();
                    }
                }
            }
        }

    },

    goToSearchView: function () {
        var searchView = this.getSearchView(),
            me = this;
        if (searchView === undefined) {
            //searchView = Ext.create('FormBuilder.view.search.SearchView');
            searchView = Ext.create('FormBuilder.view.FormContainer');
            Ext.Viewport.add([searchView,{xtype:'slidingmenu'}]);
        }

        Ext.Viewport.setActiveItem(searchView);
    },
    
    goToMainMenuView:function() {
        Ext.Viewport.setActiveItem(this.getMainMenu());
    },
    
    goToCreateView:function() {
        var createView = this.getCreateView(),
           me = this;
        if (createView === undefined) {
            //searchView = Ext.create('FormBuilder.view.search.SearchView');
            createView = Ext.create('FormBuilder.view.create.CreateView');
            Ext.Viewport.add(createView);
        }

        Ext.Viewport.setActiveItem(createView);
    }

   
});