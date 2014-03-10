Ext.define('FormBuilder.model.Form',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'uuid',type:'string'},
            {name:'display',type:'string'}
        ],
        hasMany:{model:'FormBuilder.model.Link',name:'links'}
    }
});