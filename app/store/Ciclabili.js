Ext.define("Bike.store.Ciclabili", {
    extend: 'Ext.data.Store',
    alias: 'store.Ciclabili',
    config: {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'srv/ciclabili.php',
            reader: {
                type: 'json'
            }
        }
    }
});
