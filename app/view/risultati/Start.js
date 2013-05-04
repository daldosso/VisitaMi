Ext.define('IziFold.view.risultati.Start', {

	extend: 'Ext.NavigationView',
	xtype: 'risultatiContainer',

	config: {

		title: 'Foglio di lavoro',
        iconCls: 'compose',

        autoDestroy: false,

		items: [{
				xtype: 'risultatiList'
			}
		]
	}
	
});
