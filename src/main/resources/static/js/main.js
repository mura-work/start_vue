//var app = new Vue({
//	el:"#app",
//	data:{
//		name:"",
//		result: [],
//		productForm: []
//	},
//	methods:{
//		post: function(){
//
//			//vueでバインドされた値はmethodの中ではthisで取得できる
////			param = JSON.parse(this.param)
//		
//
//			//Ajaxリクエスト
//			axios.post("http://localhost:8080/ec_site/api/v1/products").then(function(res){
//
//				//vueにバインドされている値を書き換えると表示に反映される
//				app.result = res.data
//				console.log(res.data)
//			})
//			.catch(function(res){
//				console.log(res)
//			})
//		}
//	}
//})