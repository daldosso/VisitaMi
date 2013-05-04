Ext.define('IziFold.view.lotti.Edit', {

	extend: 'Ext.form.Panel',
	xtype: 'lottiEdit',
	id: 'lottiEdit', 
	
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.DatePicker',
        'Ext.field.Select'
    ],

	config: {
		title: IziFold.app.name + ' [ Modifica Lotto ]',
		url: 'ext/Lotti/Lotto.ext-form',
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
				instructions: 'Inserire tutti i dati obbligatori, contrassegnati con un asterisco *',
				defaults: {
					labelWidth: '35%',
					picker: { 
						xtype:'datepicker', 
						slotOrder: ["day", "month", "year"],
						yearFrom: new Date().getFullYear() - 10,
                        yearTo: new Date().getFullYear() + 10,
						value: new Date()
					},
					dateFormat: 'd/m/Y'
				},
				items: [{
						xtype: 'hiddenfield',
						name: 'LOMCOD'
					}, {
						xtype: 'textfield',
						name: 'LOMCODINT',
						label: 'Codice lotto',
						autoCapitalize: true,
						required: true,
						clearIcon: true
					}, {
						xtype: 'selectfield',
						name: 'PROCOD',
						label: 'Prodotto',
						required: true,
						store: 'Prodotti',
						displayField: 'PRONOME_PRODOTTO',
						valueField: 'PROCOD'
					}, {
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name : 'LOMDATA_CONSEGNA',
						label: 'Data consegna'
					}, {
						xtype: 'spinnerfield',
						name: 'LOMQUANTITA',
						label: 'Quantita\'',
						minValue: 0,
						stepValue: 1
					}, {
						xtype: 'selectfield',
						name: 'UNICOD',
						label: 'Unita\' di misura',
						store: 'UnitaMisura',
						displayField: 'UNIDEN',
						valueField: 'UNICOD'
					}, {
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name : 'date',
						label: 'Data produzione'
					}, {
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name : 'LOMSCADENZA',
						label: 'Data scadenza'
					}, {
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name : 'LOMDATA_INIZIO_USO',
						label: 'Data inizio uso'
					}, {
						xtype: 'datepickerfield',
						destroyPickerOnHide: true,
						name : 'LOMDATA_FINE_USO',
						label: 'Data fine uso'
					}, {
						xtype: 'selectfield',
						name: 'MAGCOD',
						label: 'Magazzino',
						store: 'Magazzini',
						displayField: 'MAGDESC',
						valueField: 'MAGCOD'
					}, {
						xtype: 'checkboxfield',
						name : 'LOMCOMPOSTO',
						label: 'Composto',
						value: 'S',
						listeners: {
							change: function(me, newValue, oldValue) {
								Ext.getCmp('btnComposti').setHidden(!newValue);
							}
						}
					}
				]
			}, {
				xtype: 'button',
				id: 'btnComposti',
				padding: '10px',
				ui: 'action',
				text: 'Composti',
				action: 'composti',
				hidden: true
			}]
		},

	initialize: function() {
		this.callParent();
	}
});
