Ext.define('IziFold.view.pdp.List', {

	extend: 'Ext.List',
	xtype: 'pdpList',

	config: {
		title: IziFold.app.name + ' [ PDP ]',
		ui: 'round',
		//itemTpl: [ '{title}' ],
		store: 'Lotti',
		itemTpl: [
			'<h3>{LOMCODINT} {last_name}</h3>',
			'<h4>{position}, {affiliation}</h4>'
		]
	},

	initialize: function() {
		this.callParent();
		//this.setData(IziFold.app.aboutPages);
	}
});
