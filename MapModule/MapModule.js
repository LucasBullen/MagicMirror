/**
 * @file MapModule.js
 *
 * @author Lucas
 * @license MIT
 *
 */

/* global Module Log MM */

/**
 * @external Module
 * @see https://github.com/MichMich/MagicMirror/blob/master/js/module.js
 */

/**
 * @external Log
 * @see https://github.com/MichMich/MagicMirror/blob/master/js/logger.js
 */

/**
 * @external MM
 * @see https://github.com/MichMich/MagicMirror/blob/master/js/main.js
 */

/**
 * @module MapModule
 * @description Frontend for the module to display data.
 *
 * @requires external:Module
 * @requires external:Log
 * @requires external:MM
 */
Module.register("MapModule", {
	defaults: {
		apikey:"AIzaSyD0p-YgzAFxgjPFZd5lAgNr4-M0thYR1Cc",
		origin:"The+Ritz+Carlton,+Montreal",
		destination:"The+Ritz+Carlton,+Montreal",
		baseurl:'https://www.google.com/maps/embed/v1/directions?key=',
		style: 'border:0;-webkit-filter: grayscale(100%);filter: grayscale(100%);'
	},
	wrapper: {},
	start: function() {
		var self = this;
		self.updateDom();
	},
	getDom: function() {
		var fullyBuiltURL = this.defaults.baseurl + this.defaults.apikey + '&origin=' + this.defaults.origin + '&destination=' + this.defaults.destination;
		this.wrapper = document.createElement("div");
		var iframe = document.createElement("IFRAME");
		iframe.style = this.defaults.style;
		iframe.width = "350";
		iframe.height = "450";
		iframe.frameborder="0";
		iframe.src = fullyBuiltURL;
		this.wrapper.appendChild(iframe);
		return this.wrapper;

	},
	getStyles: function () {
		return [
			"MapModule.css",
		];
	},
	// Load translations files
	getTranslations: function() {
		//FIXME: This can be load a one file javascript definition
		return {
			en: "translations/en.json",
			es: "translations/es.json"
		};
	},
	notificationReceived: function (notification, payload, sender) {
		if(notification === "SHOW_MAP") {
			var thatt = this;			
			this.defaults.destination = payload.coordinates;
			this.updateDom();
			const Http = new XMLHttpRequest();
			fetch("https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyBYmCf4-Dm5k5yWMkKaFwwLcy8WpH95FVs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({longUrl: payload.url})
			})
			.then(response => response.json())
			.then(data => {
				var p = document.createElement("P");
				p.innerHTML = "https://goo.gl/"+thatt.makeid();
				p.classList.add("urlText");
				p.style.padding = "0px";
				thatt.wrapper.appendChild(p);
			}).catch(error => {
				var p = document.createElement("P");
				p.innerHTML = error;
				p.classList.add("urlText");
				thatt.wrapper.appendChild(p);
			});
		}
	},
	makeid: function() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	  for (var i = 0; i < 5; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	
	  return text;
	}
});
