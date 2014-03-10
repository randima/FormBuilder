Ext.define('FormBuilder.store.Forms',{
    extend:'Ext.data.Store',
    config:{
        model:'FormBuilder.model.Form',
        autoLoad:true,
        proxy:{
            type:'ajax',
            url:'data.json',
            reader:{
                type:'json',
                rootProperty:'results'
            }
        }

    }
});