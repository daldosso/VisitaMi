Ext.define('IziFold.view.lotti.Start', {

	extend: 'Ext.NavigationView',
	xtype: 'lottiContainer',

	config: {

		title: 'Lotti',
        iconCls: 'star',

        autoDestroy: false,

		items: [{
				xtype: 'lottiList'
			}
		]
	},
	
	onBackButtonTap: function() {
		if (this.fireEvent('beforeback', this)) {
			this.pop();
			this.fireEvent('back', this);
		}
	}
	
});
