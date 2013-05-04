Ext.define("Bike.store.Categorie", {
    extend: 'Ext.data.Store',
    alias: 'store.Categorie',
    config: {
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'srv/categorie.php',
            reader: {
                type: 'json'
            }
        }
    }
});
