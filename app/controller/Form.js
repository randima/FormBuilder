Ext.define('FormBuilder.controller.Form',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            formContainer:'formcontainer',
            formList:'formlist',
            detailsView: 'details',
            formView:'formview'
        },
        control:{
            formList:{
                disclose:function(list,record,index,e,eopt){
                    this.showDetails(record);
                }
            }
        }

    },

    showDetails:function(record){
        var formView = this.getFormView(),
            me=this,
            url;
        if(formView===undefined){
            formView = Ext.create('FormBuilder.view.FormView');
        }
        var tmp = Ext.create('FormBuilder.model.FormDetails', {
            name: record.get('display'),
            description: record.get('display')+'- first version',
            version:'4.1'
        });

        //var uri = record.links().first().get('uri');
        var uri = record.get('links')[0].uri;
        url = this.getURL(uri);
        
        Ext.Ajax.request({
            url: url,
            method: 'GET',
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);
                me.getFields(result.formFields);
            },
            failure: function (response) {
            }
        });
       //var data = this.sendRequest(url, 'GET', 'formFields');
       
        formView.getComponent(0).setData(tmp.data);
        this.getFormContainer().push(formView);

    },
    
    sendRequest: function (url, method, property, paramas, jsdata) {
        var rslt;
        Ext.Ajax.request({
            url:url,
            method: method,
            params: paramas,
            jsonData: jsdata,
            success: function (response) {
                var result = Ext.JSON.decode(response.responseText);
                rslt=result[property];
            },
            failure: function (response) {
                rslt= null;
            }
        });
        return rslt;
    },
    
    getURL:function(uri) {
        return uri.replace("NEED-TO-CONFIGURE", "http://localhost:8081/openmrs-standalone");
    },
    
    getFields: function (data) {
        var me = this,
            formView = this.getFormView();
        var store = Ext.create('Ext.data.Store', {
            model: 'FormBuilder.model.Reference'
        });

        var fields = [];
        store.addData(data);
        store.getRange().forEach(function (record, index) {
            var uri = record.get('links')[0].uri;
            
            Ext.Ajax.request({
                url: me.getURL(uri),
                method: 'GET',
                success: function (response) {
                    var result = Ext.JSON.decode(response.responseText);
                    formView.addField(result.field.display);
                },
                failure: function (response) {
                }
            });
        });
    }
});