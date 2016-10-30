console.log('START');

import riot from 'riot';
import bootstrap from 'bootstrap';
import NProgress from 'nprogress';

import 'tags/app.tag!';
import 'tags/vegetables/index.tag!';
import 'tags/vegetables/detail.tag!';
import 'tags/fruits/index.tag!';
import 'tags/fruits/detail.tag!';
import 'tags/meats/index.tag!';

riot.mount('app');

riot.route.base('/')

//const r = [
//    { '/' : (...args) => riot.mount('#content', 'fruit-index')},
//    { '/' : (...args) => riot.mount('#content', 'fruit-index')}
//];
//Object.keys(r).forEach((key) => {
//    NProgress.start();
//    r[key](args).then((response) => {
//        NProgress.done();
//    });
//});

// monitor whether the browser URL changes.
// A new hash is typed into the location bar
// When the back/forward buttons are pressed
// When riot.route(to) is called
// Anchor tag is clicked
riot.route((...args) => {
    console.log(args);
});
riot.route('/', (...args) => {
    riot.mount('app');
});

riot.route('/fruits/*', (...args) => {
    console.log(args);
    riot.mount('#content', 'fruit-index');
});
riot.route('/meats', (...args) => {
    riot.mount('#content', 'meat-index');
});
riot.route('/vegetables..', (...args) => {
    console.log('vegetable-index を mount します')
    riot.mount('#content', 'vegetable-index');
});
riot.route('/github', (...args) => {
    fetch('https://api.github.com/users/technoweenie/repos').then(function(response){
        return response.json();
    }).then(function(json) {
        self.items = json;
        riot.mount('#content', 'github', { items: json});
    });
});

var route = riot.route.create();
route('/vegetables/1', (...args) => {
    console.log('vegetable-detail を mount します')
    riot.mount('#page', 'vegetable-detail', { name : "にんじん" });
});
route('/vegetables/2', (...args) => {
    console.log('vegetable-detail を mount します')
    riot.mount('#page', 'vegetable-detail', { name : "かぼちゃ" });
});
route('/vegetables/3', (...args) => {
    console.log('vegetable-detail を mount します')
    riot.mount('#page', 'vegetable-detail', { name : "れたす" });
});

route = riot.route.create();
route('/fruits/*', (...args) => {
    console.log('fruit-detail を mount します')
    riot.mount('#page', 'fruit-detail');
});

// 引数にtrueを指定することでページロード時のURLに対してrouteを発動してくれる
riot.route.start(true);