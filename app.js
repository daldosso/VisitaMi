Ext.Loader.setPath({
    'Ext': 'www/lib/touch/src',
    'IziFold': 'app'
});

Ext.application({
    title: 'Bike Me!',
    name: 'Bike',
    models: [
    ],
    views: [
        'Main',
        'Bike',
        'BikeList',
        'Ciclabile',
        'PoiList'
    ],
    controllers: [
        'Bike'
    ],
    stores: [
        'Ciclabili',
        'Categorie'
    ],
    viewport: {
        autoMaximize: true
    },
    launch: function() {
        Ext.Viewport.setMasked({xtype: 'loadmask'});
        Ext.Viewport.add({xtype: 'main'});
        Ext.Viewport.setMasked(false);
    }

});
