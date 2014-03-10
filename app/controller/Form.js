Ext.define('FormBuilder.controller.Form',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            formView:'formview',
            forms:'forms',
            detailsView:'details'
           //testbtn:'formlist button'
        },
        control:{
//            testbtn:{
//                tap:function(btn,e,eopts){
//                    console.log("testing");
//                    this.getFormsView().test();
//                }
//            }
            forms:{
                disclose:function(list,record,index,e,eopt){
                    this.showDetails(record);
                }
            }
        }

    },

    showDetails:function(record){
        var detailsView=this.getDetailsView();
        if(detailsView===undefined){
            detailsView=Ext.create('FormBuilder.view.Details');
        }
        detailsView.setData(record.links().first().data);
        this.getFormView().push(detailsView);

    }
});