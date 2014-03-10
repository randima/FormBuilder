Ext.define('FormBuilder.store.FormsList',{
    extend:'Ext.data.Store',
    config:{
        model:'FormBuilder.model.Reference',
        autoLoad:true,
        proxy:{
            type:'ajax',
            //url:'data.json',
            url: 'http://localhost:8081/openmrs-standalone/ws/rest/v1/form',
            reader:{
                type:'json',
                rootProperty:'results'
            }
        }

    }
});