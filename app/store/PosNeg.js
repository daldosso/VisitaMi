Ext.define("IziFold.store.PosNeg", {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.PosNeg',
	config: {
		autoDestroy: false,
		fields: [
			'key', 'value'
		],
		data: [
			[null, ''], 
			['P', 'Positivo'], 
			['N', 'Negativo']
		]
    }
});
