Ext.define("IziFold.store.Lotti", {
    extend: 'Ext.data.Store',
    alias: 'store.Lotti',
	config: {
		autoLoad: true,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/lotti.json',
			reader: {
				type: 'json'
			}
		},
		fields: [{
				name: 'LOMCOD'
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
