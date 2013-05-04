Ext.define('IziFold.controller.Risultati', {

	extend: 'Ext.app.Controller',

	config: {

		refs: {
			risultatiContainer: 'risultatiContainer',
			accettazione: 'risultatiList button[action=accettazione]',
			codAccettazione: 'risultatiList searchfield[name="codAccettazione"]',
			analisi: 'risultatiList selectfield',
			numCampione: 'risultatiCampione spinnerfield',
			confirm: 'risultatiContainer button[action=confirm]',
			cancel: 'risultatiContainer button[action=cancel]'
		},
		control: {
			risultatiList: {
				itemtap: 'onRisultatiItemTap',
			},
			risultatiContainer: {
				back: 'onAccettazioneTap'
			},
			accettazione: {
				tap: 'onAccettazioneTap'
			},
			analisi: {
				change: 'onAnalisiSelect'
			},
			numCampione: {
				spin: 'onCampioneSelect'
			},
			confirm: {
				tap: function() {
					var form = this.getConfirm().up('formpanel');
					form.submit({
						success: function() {
							Ext.Msg.alert('Corretto', 'Operazione eseguita correttamente');
						},
						failure: function(f, r) {
							Ext.Msg.alert('Errore', r.message);
						}
					});
				}
			},
			cancel: {
				tap: function() {
					var form = this.getConfirm().up('formpanel');
					form.reset();
				}
			}
		}
	},
	
	onAccettazioneTap: function() {
		var codAccettazione = this.getCodAccettazione().getValue();
		if (codAccettazione === '') {
			Ext.Msg.alert('Errore', 'Specificare l\'accettazione');
			return false;
		}
		Ext.data.StoreManager.lookup('Analisi').load({
			params: {
				codAccettazione: codAccettazione
			}
		});
		Ext.data.StoreManager.lookup('Risultati').load({
			params: {
				refCodInt: codAccettazione
			}
		});
	},
	
	onAnalisiSelect: function(me, newValue) {
		Ext.data.StoreManager.lookup('Campioni').load({
			params: {
				codAccettazione: this.getCodAccettazione().getValue(),
				codAnalisi: newValue
			}
		});		
	},
	
	onRisultatiItemTap: function(list, index, target, record) {
		if (!this.campione) {
			this.campione = Ext.widget('risultatiCampione');
		}
		this.campione.camCod = record.getId();
		this.campione.setTitle('Campione: ' + this.campione.camCod);
		this.campione.down('label[name="CAMUNITACAMP"]').setHtml('&nbsp;&nbsp;&nbsp;di ' + record.get('CAMUNITACAMP'));
		this.getRisultatiContainer().push(this.campione);
		this.makeRisultati();
	},
	
	addRisultato: function(container, record, suffix, index) {
		var name = 'RISESITO' + suffix + '_' + index;
		var value = record.get('RISESITO' + suffix);
		
		if (record.get('PDATIPO_REG_' + suffix) === 'T') {
			container.add({
				xtype: 'textfield',
				label: record.get('PDADESC_REG_' + suffix) || 'Esito',
				name: name,
				value: value,
				autoCapitalize: true,
				clearIcon: true
			});
		} else if (record.get('PDATIPO_REG_' + suffix) === 'N') { 
			container.add({
				xtype: 'numberfield',
				name: name,
				value: value,
				label: record.get('PDADESC_REG_' + suffix) || 'Esito'
			});
		} else if (record.get('PDATIPO_REG_' + suffix) === 'P') { 
			container.add({
				xtype: 'selectfield',
				label: record.get('PDADESC_REG_' + suffix) || 'Esito',
				name: name,
				value: value,
				store: 'PosNeg',
				displayField: 'value',
				valueField: 'key'
			});
		} else if (record.get('PDATIPO_REG_' + suffix) === 'F') { 
			container.add({
				xtype: 'checkboxfield',
				label: record.get('PDADESC_REG_' + suffix) || 'Fatto',
				name: name,
				//value: value,
				value: 'F',
				checked: value === 'F',
				autoCapitalize: true,
				clearIcon: true
			});
		}
	},
	
	makeRisultati: function() {
		var records = Ext.data.StoreManager.lookup('Risultati').getData().items;
		var container = this.campione.down('fieldset');
		container.removeAll(true, true);
			
		var adeCod = this.getAnalisi().getValue();
		var camCod = this.campione.camCod;
		var risRifCam = this.campione.down('spinnerfield').getValue();
		
		for (var i=0; i<records.length; i++) {
		
			if (adeCod !== records[i].get('ADECOD') ||
				camCod !== records[i].get('CAMCOD') ||
				risRifCam !== records[i].get('RISRIFCAM')) {
				
				continue;
			}
		
			var fieldset = Ext.create('Ext.form.FieldSet', {
				//padding: 10
			});
			
			this.campione.down('label[name="ANALISI"]').setHtml('Analisi: ' + records[i].get('ADEDEN'));
			this.campione.down('label[name="PDP"]').setHtml('PDP: ' + records[i].get('PDPCODINT') + ' - ' + records[i].get('PDPDEN'));
		
			fieldset.add([{
				xtype: 'hiddenfield',
				name: 'RISCOD_' + i,
				value: records[i].get('RISCOD')
			}, {
				xtype: 'hiddenfield',
				name: 'RISRIFCAM_' + i,
				value: risRifCam
			}, {
				xtype: 'hiddenfield',
				name: 'ESACOD_' + i,
				value: records[i].get('ESACOD')
			}, {
				xtype: 'hiddenfield',
				name: 'PDACOD_' + i,
				value: records[i].get('PDACOD')
			},{
				xtype: 'label',
				html: 'Azione: ' + records[i].get('PDANUM_ORDINE') + ') ' + records[i].get('PDADESC'),
				padding: 10
			}, {
				xtype: 'selectfield',
				name: 'LOMCOD_' + i,
				label: 'Lotto',
				store: 'Lotti',
				displayField: 'PRONOME_PRODOTTO',
				valueField: 'LOMCOD',
				value: records[i].get('LOMCOD')
			}]);
			
			this.addRisultato(fieldset, records[i], '1', i);
			this.addRisultato(fieldset, records[i], '2', i);
			
			var operatore = records[i].get('UTECOD');
			if (!operatore || operatore === '') {
				operatore = IziFold.session.utecod;
			}
			
			fieldset.add([{
				xtype: 'datepickerfield',
				destroyPickerOnHide: true,
				name : 'RISDATARIF_' + i,
				label: 'Data',
				picker: { 
					xtype:'datepicker', 
					slotOrder: ["day", "month", "year"],
					yearFrom: new Date().getFullYear() - 10,
					yearTo: new Date().getFullYear() + 10,
					value: new Date()
				},
				dateFormat: 'd/m/Y',
				value: records[i].get('RISDATARIF')
			}, {
				xtype: 'selectfield',
				name: 'UTECOD_' + i,
				label: 'Operatore',
				store: 'Operatori',
				displayField: 'UTENOME',
				value: operatore,
				valueField: 'UTECOD'
			}]);
			
			container.add([fieldset]);
		}
	},
	
	onCampioneSelect: function(spin, value, direction) {
		this.makeRisultati();
	}
	
});
