Ext.define('IziFold.view.lotti.Composti', {

	extend: 'Ext.List',
	xtype: 'lottiComposti',

	config: {
		title: IziFold.app.name + ' [ Composti ]',
		store: 'LottiComposti',
		itemTpl: [
			'Codice lotto: {LOMCODINT}<div id="LOMCOD_{LOMCOD}"></div><br/>',
			'Nome prodotto: {PRONOME_PRODOTTO}'
		],
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			items: [{
					xtype: 'spacer'    
				}, {
					xtype: 'button',
					text: '<span style="font-size: 16px">+</span>',
					action: 'addComposti',
					ui: 'normal',
					height: 32,
					width: 32
			}]
		}]
	}
	
});
