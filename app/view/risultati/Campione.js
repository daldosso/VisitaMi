Ext.define('IziFold.view.risultati.Campione', {

	extend: 'Ext.form.Panel',
	xtype: 'risultatiCampione',

	config: {
		title: IziFold.app.name + ' [ Campione ]',
		url: 'ext/PDP/RisultatiCampione.ext-form',
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			items: [{
					text: 'Conferma',
					action: 'confirm'
				}, {
					xtype: 'spacer'    
				}, {
					text: 'Annulla',
					action: 'cancel'
				}]
			}, {
				xtype: 'label',
				name: 'ANALISI',
					style: 'text-align:center; padding-bottom: 10px; font-weight: bold'
				}, {
					xtype: 'label',
					name: 'PDP',
					style: 'text-align:center; padding-bottom: 20px; font-weight: bold'
			}, {
			xtype: 'panel',
			layout: {
				type: 'hbox',
				align: 'middle'
			},
			items: [{
				xtype: 'spinnerfield',
				label: 'Unita\' campionaria',
				minValue: 1,
				stepValue: 1,
				labelWidth: '160px',
				width: '320px'
			}, {
				xtype: 'label',
				name: 'CAMUNITACAMP',
				html: '&nbsp;&nbsp;&nbsp;di X'
			}
		]}, {
			xtype: 'label',
			html: '&nbsp;',
			margin: 10
		}, {
			xtype: 'fieldset',
			items: [{
				xtype: 'hiddenfield',
				name: 'LOMCOD'
			}, {
				xtype: 'label',
				html: 'Azione: ',
				padding: 10
			}, {
				xtype: 'textfield',
				name: 'LOMCODINT',
				label: 'Codice lotto',
				autoCapitalize: true,
				required: true,
				clearIcon: true
			}, {
				xtype: 'selectfield',
				name: 'PROCOD',
				label: 'Prodotto',
				required: true,
				store: 'Prodotti',
				displayField: 'PRONOME_PRODOTTO',
				valueField: 'PROCOD'
			}]
		}]
	}
	
});
