Ext.define("IziFold.store.Prodotti", {
    extend: 'Ext.data.Store',
    alias: 'store.Prodotti',
	config: {
		autoLoad: true,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/prodotti.json',
			reader: {
				type: 'json'
			}
		},
		fields: [{
				name: 'PROCOD'
			}, {
				name: 'PRONOME_PRODOTTO'
			}
		]
    }
});
