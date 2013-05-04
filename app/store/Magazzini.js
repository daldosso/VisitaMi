Ext.define("IziFold.store.Magazzini", {
    extend: 'Ext.data.Store',
    alias: 'store.Magazzini',
	config: {
		autoLoad: true,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/magazzini.json',
			reader: {
				type: 'json'
			}
		},
		fields: [{
				name: 'MAGCOD'
			}, {
				name: 'MAGCODINT'
			}, {
				name: 'MAGDESC'
			}
		]
    }
});
