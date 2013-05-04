Ext.define('Bike.view.BikeList', {
    extend: 'Ext.List',
    xtype: 'bikeList',
    config: {
        title: 'VisitaMi',
        //ui: 'round',
        store: 'Ciclabili',
        itemTpl: [
            '<b>{nomeVia}</b>'
        ],
        items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                        xtype: 'searchfield',
                        label: 'Cerca',
                        name: 'query',
                        listeners: {
                            keyup: function(me) {
                                var lotti = Ext.data.StoreManager.lookup('Lotti');
                                lotti.clearFilter();
                                lotti.filterBy(function(record, id) {
                                    var match = me.getValue().toUpperCase();
                                    var codiceLotto = record.get('LOMCODINT').toUpperCase();
                                    var nomeProdotto = record.get('PRONOME_PRODOTTO').toUpperCase();
                                    return (codiceLotto.indexOf(match) !== -1)
                                            || (nomeProdotto.indexOf(match) !== -1);
                                });
                            }
                        }
                    }, {
                        xtype: 'spacer'
                    }, {
                        xtype: 'button',
                        text: '<span style="font-size: 16px">+</span>',
                        action: 'addSpesa',
                        ui: 'normal',
                        height: 32,
                        width: 32
                    }]
            }]
    }

});
