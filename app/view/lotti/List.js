Ext.define('IziFold.view.lotti.List', {

	extend: 'Ext.List',
	xtype: 'lottiList',

	config: {
		title: IziFold.app.name + ' [ Lotti ]',
		//ui: 'round',
		store: 'Lotti',
		itemTpl: [
			'Codice lotto: {LOMCODINT}<div id="LOMCOD_{LOMCOD}"></div><br/>',
			'Nome prodotto: {PRONOME_PRODOTTO}'
		],
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			items: [{
                    xtype: 'searchfield',
                    label: 'Cerca',
                    name: 'query',
					listeners: {
						keyup: function(me) {
							var lotti = Ext.data.StoreManager.lookup('Lotti');
							lotti.clearFilter();
							lotti.filterBy(function(record, id) {
								var match = me.getValue().toUpperCase(); 
								var codiceLotto = record.get('LOMCODINT').toUpperCase();
								var nomeProdotto = record.get('PRONOME_PRODOTTO').toUpperCase();
								return (codiceLotto.indexOf(match) !== -1) 
									|| (nomeProdotto.indexOf(match) !== -1);
							});
						}
					}
                }, {
					xtype: 'spacer'    
				}, {
					xtype: 'button',
					text: '<span style="font-size: 16px">+</span>',
					action: 'addLotto',
					ui: 'normal',
					height: 32,
					width: 32
			}]
		}]
	}
	
});
