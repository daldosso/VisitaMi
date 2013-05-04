Ext.define('IziFold.view.Logout', {

	extend: 'Ext.Panel',
	xtype: 'logout',

	config: {
		title: 'Logout',
        iconCls: 'action',
		listeners: {
			activate: function() {
				Ext.Ajax.request({
					url: 'ext/Ambiente/Session.ext-form',
					method: 'DELETE',
					success: function (response, options) {
						window.location.href = '/';					
					},
					failure: function(form, action) {	
						window.location.href = '/';
					}
				});
			}
		}
	}
});
