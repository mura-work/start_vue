const app = new Vue({
	el: '#app',
	data: {
		lastName: "",
		firstName: "",
		fullName: "",
	},
	watch: {
		firstName: function(){
			this.fullName = this.lastName + this.firstName
		},
		lastName: function(value){
			this.fullName = this.lastName + this.firstName
		}
	},
})