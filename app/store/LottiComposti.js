Ext.define("IziFold.store.LottiComposti", {
    extend: 'Ext.data.Store',
    alias: 'store.LottiComposti',
	config: {
		autoLoad: false,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/lottiComposti.json',
			reader: {
				type: 'json'
			}
		},
		fields: [{
				name: 'LOMCOD'
			}, {
				name: 'LOMCOD_COMPONENTE'
			}, {
				name: 'LOMCODINT'
			}, {
				name: 'PROCOD'
			}, {
				name: 'LOMSCADENZA'
			}, {
				name: 'LOMQUANTITA'
			}, {
				name: 'PRONOME_PRODOTTO'
			}
		]
    }
});
