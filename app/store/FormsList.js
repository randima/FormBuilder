Ext.define('FormBuilder.store.FormsList',{
    extend:'Ext.data.Store',
    config:{
        model:'FormBuilder.model.Reference',
        autoLoad:true,
        proxy:{
            type:'ajax',
            //url:'data.json',
            url: 'https://api.raxa.io/ws/rest/v1/form',
            reader:{
                type:'json',
                rootProperty:'results'
            }
        }

    }
});