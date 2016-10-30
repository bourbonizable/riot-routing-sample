console.log('START');

import riot from 'riot';
import bootstrap from 'bootstrap';
import NProgress from 'nprogress';

import 'tags/app.tag!';
import 'tags/pages/vegetables/index.tag!';
import 'tags/pages/vegetables/detail.tag!';
import 'tags/pages/fruits/index.tag!';
import 'tags/pages/fruits/detail.tag!';
import 'tags/pages/meats/index.tag!';
import 'tags/pages/github.tag!';
import 'tags/pages/index.tag!';
import 'tags/login.tag!';

import routes from 'routes.js';
import User from 'User.js';

var app,
	user,
	data;

NProgress.start();
Object.keys(routes).forEach((route) => {
	riot.route(route, function(...args) {
		if (!app) {
			console.log('init');
			user = new User();
			data = {};
			data.view = null;
			data.user = user;
			app = riot.mount('app', data)[0];
			riot.route('/login', 'Login', true);
			NProgress.done();
		} else {
			console.log('already initialized');
			NProgress.start();
			// gateway.fetch().then(function(data) {...
			data.view = routes[route](args);
			//data.user = this.user;
			app.mountSubview(data);
			NProgress.done();
			//})
		}
	});
});

// monitor whether the browser URL changes.
// A new hash is typed into the location bar
// When the back/forward buttons are pressed
// When riot.route(to) is called
// Anchor tag is clicked
// riot.route((...args) => {
//     //console.log(args);
// });
// riot.route('/', (...args) => {
//     riot.mount('app');
// });
// riot.route('/login', (...args) => {
// 	riot.mount('#content', 'login');
// });
//
// riot.route('/meats', (...args) => {
//     riot.mount('#content', 'meat-index');
// });
// // riot.route('/vegetables/*', () => {
// //  NProgress.start();
// // 	riot.mount('#content', 'vegetable-index');
// // 	NProgress.done();
// // });
// riot.route('/vegetables..', (...args) => {
// 	riot.mount('#content', 'vegetable-index');
// });
// riot.route('/github', (...args) => {
//     NProgress.start();
//     fetch('https://api.github.com/users/technoweenie/repos').then(function(response){
//         return response.json();
//     }).then(function(json) {
//         self.items = json;
//         riot.mount('#content', 'github', { items: json});
// 	    NProgress.done();
//     });
// });
//
//  var route = riot.route.create();
//
// route('/vegetables/1', (...args) => {
// 	riot.mount('#page', 'vegetable-detail', { name : "にんじん" });
// });
// route('/vegetables/2', (...args) => {
//     riot.mount('#page', 'vegetable-detail', { name : "かぼちゃ" });
// });
// route('/vegetables/3', (...args) => {
//     riot.mount('#page', 'vegetable-detail', { name : "れたす" });
// });
//
//
// route = riot.route.create();
// route('/fruits/*', (...args) => {
//     console.log('fruit-detail を mount します')
//     riot.mount('#page', 'fruit-detail');
// });

// 引数にtrueを指定することでページロード時のURLに対してrouteを発動してくれる
riot.route.start(true);