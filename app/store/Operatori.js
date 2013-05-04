Ext.define("IziFold.store.Operatori", {
    extend: 'Ext.data.Store',
    alias: 'store.Operatori',
	config: {
		autoLoad: true,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/Operatori.json',
			reader: {
				type: 'json'
			}
		}
    }
});
