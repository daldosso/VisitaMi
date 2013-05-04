Ext.define('Bike.view.Ciclabile', {
    extend: 'Ext.form.Panel',
    xtype: 'ciclabile',
    id: 'ciclabile',
    config: {
        title: ' [ Ciclabile ]',
        layout: 'fit',
        items: [{
            xtype: 'map',
            useCurrentLocation: true
        }]
    }

});
