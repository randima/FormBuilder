Ext.define('FormBuilder.view.Forms',{
    extend:'Ext.List',
    xtype:'forms',
    config:{
        title:'Forms',
        store:'Forms',
        loadingText:'Loading data...',
        emptyText:'No forms Found',
        onItemDisclosure:true,
        itemTpl:'{display}'
    },

    /*
    *For testing purpose
    * @private
    */
    initialize:function(){
        this.getStore().on({
            load:this.onStoreLoad,
            scope:this
        });
        console.log("init list");
        this.callParent();
    },

    /*
     *For testing purpose. activate when store loaded
     * @private
     * @method
     */
    onStoreLoad:function(cmp, records, successful, operation, eOpts){
        console.log("list loaded");
        console.log(records);
        records[0].links().each(function(link){
            console.log(link);
        });

    }
});