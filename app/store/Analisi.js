Ext.define("IziFold.store.Analisi", {
    extend: 'Ext.data.Store',
    alias: 'store.Analisi',
	config: {
		autoLoad: false,
        proxy: {
			type: 'ajax',
			url: 'ext/Lotti/analisi.json',
			reader: {
				type: 'json'
			}
		}
    }
});
