Ext.define('Bike.view.Spesa', {
    extend: 'Ext.form.Panel',
    xtype: 'spesa',
    id: 'spesa',
    config: {
        url: 'srv/spesa-add.php',
        title: 'Aggiungi Spesa',
        items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                        text: 'Conferma',
                        action: 'confirm'
                    }, {
                        xtype: 'spacer'
                    }, {
                        text: 'Annulla',
                        action: 'cancel'
                    }]
            }, {
                xtype: 'fieldset',
                defaults: {
                    labelWidth: '35%',
                    picker: {
                        xtype: 'datepicker',
                        slotOrder: ["day", "month", "year"],
                        yearFrom: new Date().getFullYear() - 10,
                        yearTo: new Date().getFullYear() + 10,
                        value: new Date()
                    },
                    dateFormat: 'd/m/Y'
                },
                items: [{
                        xtype: 'hiddenfield',
                        name: 'idSpesa'
                    }, {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name: 'data',
                        label: 'Data spesa',
                        value: new Date()
                    }, {
                        xtype: 'numberfield',
                        name: 'importo',
                        label: 'Importo €',
                        clearIcon: true
                    }, {
                        xtype: 'selectfield',
                        name: 'categoria',
                        label: 'Categoria',
                        store: 'Categorie',
                        displayField: 'descrizione',
                        valueField: 'idCategoria'
                    }, {
                        xtype: 'textareafield',
                        name: 'quantita',
                        label: 'Note'
                    }
                ]}]


    }

});
