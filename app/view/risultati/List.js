Ext.define('IziFold.view.risultati.List', {

	extend: 'Ext.List',
	xtype: 'risultatiList',

	config: {
		title: IziFold.app.name + ' [ Foglio di lavoro ]',
		store: 'Campioni',
		itemTpl: [
			'Numero campione: {CAMPRIMAPROV}<br/>' +
			'Matricola: {CAMNUMMAT}<br/>' + 
			'Specie: {SPEDEN}<br/>' + 
			'Materiale: {MATDEN}'
		],
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			items: [{
                    xtype: 'searchfield',
                    label: 'Accettazione',
					labelWidth: '100px',
					width: '300px',
                    name: 'codAccettazione',
					value: '13AT4UD-D/494'
                }, {
					xtype: 'button',
					iconCls: 'refresh',
					iconMask: true,
					action: 'accettazione'
				}, {
					xtype: 'selectfield',
					name: 'ADECOD',
					label: 'Analisi',
					labelWidth: '60px',
					//width: '360px',
					store: 'Analisi',
					displayField: 'ADEDESC',
					valueField: 'ADECOD',
					//docked: 'right'
					flex: 1
				}]
		}]
	}
	
});
