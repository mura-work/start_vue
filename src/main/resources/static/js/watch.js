const app = new Vue({
	el: '#app',
	data: {
		rangeKm: '',
		rangeM: '',
		rangeMm: '',
	},
	watch: {
		rangeKm: function(value){
			this.rangeM = value * 1000
			this.rangeMm = value * 1000000
		},
		rangeM: function(value){
			this.rangeKm = value / 1000
			this.rangeMm = value * 1000
		},
		rangeMm: function(value){
			this.rangeM = value / 1000
			this.rangeKm = value / 1000000
		}
	}
})