Ext.define('IziFold.view.pdp.Start', {

	extend: 'Ext.NavigationView',
	xtype: 'pdpContainer',

	config: {

		title: 'Pdp',
        iconCls: 'team',
        autoDestroy: false,

		items: [{
				xtype: 'pdpList'
			}
		]
	}
});
