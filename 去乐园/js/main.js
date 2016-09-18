require.config({
	paths:{
		jq:'jquery-2.1.1',
		bootstrap:'bootstrap.min',
		underscore:'underscore',
		backbone:'backbone',
		router:'router',
		swiper:'swiper-3.3.1.min',
		css:'css',
		text:'text',
		home:'../html/home',
		paradisefunc:'../html/paradisefunc'
	},
	shim:{
		'swiper':{
			export:'_'
		}
	}
});
require(['jq','router','swiper'],function($,r,s){
	Backbone.history.start();
});