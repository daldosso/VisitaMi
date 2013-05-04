Ext.define("IziFold.store.Risultati", {
    extend: 'Ext.data.Store',
    alias: 'store.Risultati',
	config: {
		autoLoad: false,
        proxy: {
			type: 'ajax',
			url: 'ext/pdp/Risultati.json',
			reader: {
				type: 'json'
			}
		}
    }
});
