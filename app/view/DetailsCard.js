Ext.define('FormBuilder.view.DetailsCard', {
    extend: 'Ext.Panel',
    xtype: 'detailscard',
    config: {
        styleHtmlContent: true,
        styleHtmlCls: 'form-details-html',
        cls:'form-details',
        tpl: new Ext.XTemplate(
            '<table>',
            '<tr><td class="form-name-label">Name:</td><td class="form-name">{name}</td><td class="version-label">Version:</td><td class="version">{version}</td></tr>',
            '<tr><td class="description-label">Description:</td><td class="description" colspan="3">{description}</td></tr>',
            '</table>'
        ),
        zIndex:6
    }
});