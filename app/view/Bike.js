Ext.define('Bike.view.Bike', {
    extend: 'Ext.NavigationView',
    xtype: 'bikeContainer',
    config: {
        title: 'Ciclabili',
        iconCls: 'compose',
        autoDestroy: false,
        items: [{
                xtype: 'poiList'
            }, {
                xtype: 'bikeList'
            }
        ]
    }

});
