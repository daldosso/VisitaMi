Ext.define("IziFold.store.Campioni", {
    extend: 'Ext.data.Store',
    alias: 'store.Campioni',
	config: {
		autoLoad: false,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/campioni.json',
			reader: {
				type: 'json'
			}
		}
    }
});
