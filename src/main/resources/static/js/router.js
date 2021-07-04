const TOP = {template: '<div>Top</div>'}
const USER = {template: '<div>User {{$route.params.userId}}<div><router-view></router-view></div></div>'}
const POSTS = {template: '<div>posts<div>posts333</div></div>'}

// ルーティングの生成
const ROUTER = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/index',
			name: 'top',
			component: TOP,
			alias: '/back'
		},
		{
			path: '/users/:userId',
			name: 'user',
			component: USER,
			children: [
				{
					path: 'posts',
					component: POSTS
				}
			]
		},
		{
			path: '/goTop',
			redirect: {name: 'top'}
		},
	]
})

// Vueインスタンスにルーティングをマウント
const app = new Vue({
	router: ROUTER
}).$mount('#app')




