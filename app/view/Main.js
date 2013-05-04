Ext.define('Bike.view.Main', {

	extend: 'Ext.tab.Panel',
	xtype: 'main',

	config: {

		tabBarPosition: 'bottom',
		tabBar: {
			ui: 'gray'
		},

		items: [
                    { xclass: 'Bike.view.Bike' }
		]
	}
});
