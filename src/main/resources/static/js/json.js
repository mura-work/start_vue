const app = new Vue({
	el: '#app',
	data: {
		contents: [
			{id: "",title: "",detail: ""},
		]
	},
	methods: {
		callApi() {
			axios.get("http://localhost:3000/api/v1/contents").then(response => {
				console.log(response.data)
				this.contents = response.data
			})
		}
	}
})