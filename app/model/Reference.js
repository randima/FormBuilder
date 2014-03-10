Ext.define('FormBuilder.model.Reference',{
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name:'uuid',type:'string'},
            { name: 'display', type: 'string' },
            {name:'links',type:'auto'}
        ],
       // hasMany:{model:'FormBuilder.model.Link',name:'links',associationKey:'links'}
    }
});