Ext.define("IziFold.store.UnitaMisura", {
    extend: 'Ext.data.Store',
    alias: 'store.UnitaMisura',
	config: {
		autoLoad: true,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/UnitaMisura.json',
			reader: {
				type: 'json'
			}
		},
		fields: [{
				name: 'UNICOD'
			}, {
				name: 'UNISIGLA'
			}, {
				name: 'UNIDEN'
			}
		]
    }
});
