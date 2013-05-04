Ext.define('IziFold.view.Login', {

	extend: 'Ext.form.Panel',
	xtype: 'login',
	requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
	
	config: {

		title: 'Izifold [ Login ]',
        html: '',
		items: [{
			xtype: 'image',
			src: 'resources/images/sencha.png',
			style: 'width:300px; height:300px; margin:auto'
		}, {
			xtype: 'label',
			html: 'IziFold Mobile',
			style: 'text-align: center; margin: 20px; font-size: 30px; font-weight: bold'
		}, {
			xtype: 'label',
			html: 'Login failed. Please enter the correct credentials.',
			itemId: 'signInFailedLabel',
			hidden: true,
			hideAnimation: 'fadeOut',
			showAnimation: 'fadeIn',
			style: 'color:#990000;margin:5px 0px;'
		}, {
			xtype: 'fieldset',
			title: 'Login',
			items: [{
				xtype: 'textfield',
				placeHolder: 'Username',
				itemId: 'userNameTextField',
				id: 'userNameTextField',
				name: 'userNameTextField',
				required: true
			}, {
				xtype: 'passwordfield',
				placeHolder: 'Password',
				itemId: 'passwordTextField',
				id: 'passwordTextField',
				name: 'passwordTextField',
				required: true
			}]
		}, {
			xtype: 'button',
			itemId: 'logInButton',
			ui: 'action',
			padding: '10px',
			text: 'Log In',
			listeners: {
				tap: function() {
					var user = Ext.getCmp('userNameTextField').getValue();
					var password = Ext.getCmp('passwordTextField').getValue();
					
					Ext.Ajax.request({
						url: 'api/Ambiente/session.ext-form',
						method: 'GET',
						params: {
							Utente: user,
							Password: password
						},
						success: function(response){
							var resp = Ext.decode(response.responseText);
							IziFold.session = {
								utecod: resp.utecod 
							};
							Ext.Viewport.removeAll();
							Ext.Viewport.add({ xtype: 'main' });
							
						},
						failure: function(response) {
							Ext.Msg.alert('Errore', 'Utente non trovato');
						}
					});
				}
			}
		}]
	}
	
});



