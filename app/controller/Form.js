Ext.define('FormBuilder.controller.Form',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            formContainer:'formcontainer',
            formList:'formlist',
            detailsView: 'details',
            formView:'formview'
           //testbtn:'formlist button'
        },
        control:{
//            testbtn:{
//                tap:function(btn,e,eopts){
//                    console.log("testing");
//                    this.getFormsView().test();
//                }
//            }
            formList:{
                disclose:function(list,record,index,e,eopt){
                    this.showDetails(record);
                }
            }
        }

    },

    showDetails:function(record){
        var formView=this.getFormView();
        if(formView===undefined){
            formView = Ext.create('FormBuilder.view.FormView');
        }
        var tmp = Ext.create('FormBuilder.model.FormDetails', {
            name: record.get('display'),
            description: record.get('display')+'- first version',
            version:'4.1'
        });
        
        //record.links().first().data //gives next uri
        formView.getComponent(0).setData(tmp.data);
        this.getFormContainer().push(formView);

    }
});