const app = new Vue({
	el: '#app',
	data: {
		colors: [
			{name: "red"},
			{name: "blue"},
			{name: "white"},
		],
	},
	watch: {
		colors: {
			handler: function (newValue, oldValue){
				console.log('u');
				console.log(newValue);
				console.log(newValue);
			},
			deep: false
		}
	}
})