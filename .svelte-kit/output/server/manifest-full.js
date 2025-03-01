export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2","fonts/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllfvg-I.woff2","fonts/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQdl9fvg-I.woff2","fonts/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl5fvg-I.woff2","fonts/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2","fonts/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2","fonts/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2","fonts/pxiEyp8kv8JHgFVrJJfecg.woff2","fonts/pxiGyp8kv8JHgFVrJJLucHtA.woff2","images/rest6-arrow-left.png","images/rest6-arrow-right.png","images/rest6-bottom-restaurant.jpg","images/rest6-bottom-sec-gra.jpg","images/rest6-bread-icon.png","images/rest6-flowers.png","images/rest6-fork.png","images/rest6-gradient.png","images/rest6-home-box1.jpg","images/rest6-home-box2.jpg","images/rest6-home-box3.jpg","images/rest6-home-forkk.png","images/rest6-icon-3.png","images/rest6-icon1.png","images/rest6-icon2.png","images/rest6-mozarella.jpg","images/rest6-pasta-icon.png","images/rest6-pasta.jpg","images/rest6-pizza-icon.png","images/rest6-pizza.jpg","images/rest6-play.png","images/rest6-slider-slide111.jpg","images/rest6-slider-slide22.jpg","images/rest6-slider-slide32.jpg","images/rest6-spices.jpg","images/rest6-toscania.jpg","images/restaurant6-image.jpg","images/restaurant6_logo.png","images/restaurant6_logo_2x.png"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CcVNKlff.js",app:"_app/immutable/entry/app.CQiXFDBu.js",imports:["_app/immutable/entry/start.CcVNKlff.js","_app/immutable/chunks/BERBRuGB.js","_app/immutable/chunks/BkYEvMn8.js","_app/immutable/chunks/BRTUVvQ5.js","_app/immutable/entry/app.CQiXFDBu.js","_app/immutable/chunks/BkYEvMn8.js","_app/immutable/chunks/D0OjtcAc.js","_app/immutable/chunks/B8F_q8qN.js","_app/immutable/chunks/ZHh9h0j0.js","_app/immutable/chunks/BRTUVvQ5.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
