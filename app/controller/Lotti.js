Ext.define('IziFold.controller.Lotti', {

	extend: 'Ext.app.Controller',

	config: {

		refs: {
			lottiContainer: 'lottiContainer',
			lottiEdit: 'lottiEdit',
			addLotto: 'lottiContainer button[action=addLotto]',
			confirm: 'lottiContainer button[action=confirm]',
			cancel: 'lottiContainer button[action=cancel]',
			seach: 'lottiList searchfield',
			composti: 'lottiContainer button[action=composti]'			
		},

		control: {
			lottiContainer: {
				beforeback: 'onLottiContainerBack'
			},
			lottiList: {
				itemtap: 'onLottiItemTap',
				itemswipe: 'onItemSwipe',
				itemdoubletap: 'onItemDoubleTap'
			},
			addLotto: {
				tap: 'onAddLotto'
			},
			confirm: {
				tap: function() {
					var form = this.getConfirm().up('formpanel');
					form.submit({
						success: function() {
							Ext.Msg.alert('Corretto', 'Operazione eseguita correttamente', Ext.emptyFn);
						},
						failure: function(f, r) {
							Ext.Msg.alert('Errore', r.message, Ext.emptyFn);
						}
					});
				}
			},
			cancel: {
				tap: function() {
					var form = this.getConfirm().up('formpanel');
					form.reset();
					/*for (var item in form.getItems()) {
						if (item.isXType && item.isXType('selectfield')) {
							item.setValue('');
						}
					}*/
				}
			},
			search: {
				change: function() {
					alert('change');
				}
			},
			composti: {
				tap: 'onCompostiTap'
			}
		}
	},
	
	onAddLotto: function(id) {
		if (!this.lottoEdit) {
			this.lottoEdit = Ext.widget('lottiEdit');
		}
		if (Ext.isNumber(id)) {
			var lotti = Ext.data.StoreManager.lookup('Lotti');
			this.lottoEdit.setRecord(lotti.getById(id));
		} else {
			this.lottoEdit.reset();
		}
		this.getLottiContainer().push(this.lottoEdit);
	},

	onLottiItemTap: function(list, idx) {
		//this.getAboutContainer().push(IziFold.app.config.aboutPages[idx]);
	},
	
	onLottiContainerBack : function () {
		Ext.data.StoreManager.lookup('Lotti').load();
		var form = this.getConfirm().up('formpanel');
		var items = form.getItems().items;
		for (var i=0; i<items.length; i++) {
			var item = items[i];
			if (item && item.isXType && item.isXType('fieldset')) {
				var subitems = item.getItems().items;
				for (var j=0; j<subitems.length; j++) {
					var subitem = subitems[j];
					if (subitem.getComponent)
						subitem.getComponent().originalValue = subitem.getValue();
					if (subitem.isDirty && subitem.isDirty()) {
						//alert(subitem.getName() + ' isDirty ');
						//return false;
					}
				}				
			}
		}
		
		/*if (form.isDirty()) {
			Ext.Msg.show({
				title: EasyRest.application.name,
				msg: 'Salvare le modifiche prima di uscire?',
				buttons: Ext.Msg.YESNOCANCEL,
				icon: Ext.Msg.QUESTION,
				cls: 'alert-dialog',
				fn: function (buttonId) {
				},
				scope: this
			});
			return false;
		}
		return false;*/
	},
	
	onItemSwipe: function(me, ix, target, record, event, options) {
		if (event.direction == "left") {
			var del = Ext.create("Ext.Button", {
				ui: "decline",
				text: "Delete",
				style: "position:absolute;right:0.125in;",
				handler: function() {
					Ext.Msg.confirm("Elimina", "Vuoi eliminare il record selezionato?", function(buttonId) {
						
						if (buttonId === 'no') {
							return false;
						}
					
						Ext.Ajax.request({
							url: 'ext/Lotti/Lotto.ext-form',
							method: 'DELETE',
							params: { id: record.getId() },
							success: function (response, options) {
								var resp = Ext.decode(response.responseText);
								if (!resp.success) {
									Ext.Msg.alert('Attenzione', resp.message);            
								}
								var store = record.stores[0];
								store.load();
							},
							failure: function(form, action) {	
								Ext.Msg.alert('Attenzione', action.result.message);
							}
						});
					});
				}
			});
			var removeDeleteButton = function() {
				Ext.Anim.run(del, 'fade', {
					after: function() {
						del.destroy();
					},
					out: true
				});
			};
			del.renderTo(Ext.DomQuery.selectNode("#LOMCOD_" + record.getId(), target.dom));
			me.on({
				single: true,
				buffer: 250,
				itemtouchstart: removeDeleteButton
			});
			me.element.on({
				single: true,
				buffer: 250,
				touchstart: removeDeleteButton
			});
		}
	},
	
	onItemDoubleTap: function(me, index, target, record, e, eOpts) {
		this.onAddLotto(record.getId());
	},
	
	onCompostiTap: function() {
		if (!this.composti) {
			this.composti = Ext.widget('lottiComposti');
		}
		this.getLottiContainer().push(this.composti);
	}
	
});
