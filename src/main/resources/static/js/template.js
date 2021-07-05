Vue.filter('readMore', function(text, length, suffix) {
	return text.substring(0, length) + suffix
})

const app = new Vue({
	el: '#app',
	data: {
		message: 'aaa',
		number: 100000000,
		ok: true,
		url: 'urlllll',
		text: '双方向データバインディング： データオブジェクトとテンプレートの変更を相互に作用させること。コンポーネント： ページを構成するUI部品のこ→テンプレートとそのロジックから構成→よく使う機能をコンポーネント化する→再利用性が高まる、コードの見通しがよくな'
	},
})