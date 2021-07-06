const app = new Vue({
	el: '#app',
	computed: {
		computedNumber: function() {
			console.log("c")
			return Math.random()
		}
	},
	methods: {
		methodsNumber: function() {
			console.log("m")
			return Math.random()
		}
	}
})