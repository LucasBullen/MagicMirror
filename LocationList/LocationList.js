/**
 * @file LocationList.js
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
 * @module LocationList
 * @description Frontend for the module to display data.
 *
 * @requires external:Module
 * @requires external:Log
 * @requires external:MM
 */
Module.register("LocationList", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000
	},
	index: 0,
	locations: [
		{name:"MONUMENT LA VILLE IMAGINAIRE", coordinates:"45.512726,-73.537655"},
		{name:"REGARDER LES POMMETIERS", coordinates:"45.560558,-73.558748"},
		{name:"MONUMENT ÉMILIE-GAMELIN", coordinates:"45.51486,-73.559707"},
		{name:"MONUMENT LOUIS RUBINSTEIN (PC J.-MANCE)", coordinates:"45.516872,-73.58893"},
		{name:"Outremont",coordinates:"41,+avenue+Saint+Just+QC"},
		{name:"Ville Marie",coordinates:"100,+rue+Sherbrooke+Est+QC"},
		{name:"LES ALLUSIFS", coordinates:"45.479052,-73.57543"},
		{name:"MONUMENT LA PEUR", coordinates:"45.501407,-73.555256"},
		{name:"LE VILLAGE IMAGINÉ", coordinates:"45.475451,-73.559952"},
		{name:"OPTIMAX (SISM-64)", coordinates:"45.501112,-73.593958"},
		{name:"Saint Léonard",coordinates:"8420,+boulevard+Lacordaire+QC"},
		{name:"MONUMENT À LA POINTE", coordinates:"45.47599,-73.573407"},
		{name:"Villeray Saint Michel Parc Extension",coordinates:"7355,+avenue+Christophe+Colomb+QC"},
		{name:"HOMMAGE À JÉROME LE ROYER", coordinates:"45.508493,-73.5533"},
		{name:"HOMMAGE À MIHAI EMINESCU, POÈTE ROUMAIN", coordinates:"45.514796,-73.576459"},
		{name:"SUBLIME", coordinates:"45.477999,-73.556237"},
		{name:"NEUF COULEURS AU VENT", coordinates:"45.521812,-73.565807"},
		{name:"RÉVOLUTION", coordinates:"45.523973,-73.552695"},
		{name:"LA SOURCE", coordinates:"45.534752,-73.617845"},
		{name:"Rivière des Prairies Pointe aux Trembles",coordinates:"7000,+rue+Marie+Victorin+QC"},
		{name:"ÉPISODE", coordinates:"45.560483,-73.558557"},
		{name:"MONUMENT FRERE MARIE VICTORIN", coordinates:"45.55728,-73.55587"},
		{name:"Rivière des Prairies Pointe aux Trembles",coordinates:"10050,+boulevard+Gouin+Est+QC"},
		{name:"TONNELLES DE LA ROSERAIE", coordinates:"45.561848,-73.55512"},
		{name:"BUSTE DU DR. JOSÉ P. RIZAL", coordinates:"45.491014,-73.634079"},
		{name:"MONUMENT AFTER BABEL / A CIVIC SQUARE", coordinates:"45.51003,-73.567141"},
		{name:"LES LEÇONS SINGULIÈRES (VOLET 1)", coordinates:"45.521539,-73.570342"},
		{name:"Site patrimonial de Percé", coordinates: "48.521306,-64.21425"},
		{name:"TEMPS D'ARRÊT", coordinates:"45.549036,-73.592735"},
		{name:"LE JARDIN DE LYON", coordinates:"45.512758,-73.554254"},
		{name:"Rosemont La Petite Patrie",coordinates:"6707,+avenue+De+Lorimier+QC"},
		{name:"MONUMENT À ÉMILE-NELLIGAN", coordinates:"45.517356,-73.569589"},
		{name:"CROIX DU MONT-ROYAL", coordinates:"45.508851,-73.587896"},
		{name:"LAITERIE (MUSÉE) (LCH)", coordinates:"45.42962,-73.666496"},
		{name:"MONUMENT LE BANC DES AMOUREUX", coordinates:"45.556163,-73.558294"},
		{name:"ATHÉNA", coordinates:"45.527752,-73.62429"},
		{name:"MONUMENT SANS TITRE (BLOC)", coordinates:"45.560966,-73.564589"},
		{name:"PORTE DE JOUR", coordinates:"45.51207,-73.550966"},
		{name:"CONTAINED UNIVERSE", coordinates:"45.50828,-73.527247"},
		{name:"GRATTE-CIEL, CASCADES, RUISSEAUX...", coordinates:"45.515507,-73.560219"},
		{name:"LE LION DE LA FEUILLÉE", coordinates:"45.558796,-73.555637"},
		{name:"Saint Léonard",coordinates:"8370,+boulevard+Lacordaire+QC"},
		{name:"CLOCHE DE LA PAIX DU JARDIN JAPONAIS", coordinates:"45.560409,-73.560191"},
		{name:"LaSalle",coordinates:"7644,+rue+Édouard+QC"},
		{name:"Mercier-Hochelaga-Maisonneuve", coordinates:"8105,+rue+Hochelaga+QC"},
		{name:"HOMMAGE À CLAUDE JUTRA", coordinates:"45.513134,-73.572945"},
		{name:"Verdun",coordinates:"7244,+boulevard+LaSalle+QC"},
		{name:"CAESURA", coordinates:"45.537509,-73.628024"},
		{name:"LOCATION SOCLE / MÉTRO PLACE ST-HENRI", coordinates:"45.477149,-73.586598"},
		{name:"ASHAPMOUCHOUAN", coordinates:"45.526861,-73.586445"},
		{name:"LIMITE TEMPS", coordinates:"45.570984,-73.662069"},
		{name:"LES GRAMINÉES DU JARDIN SAINT-SULPICE", coordinates:"45.559403,-73.641568"},
		{name:"TANGO DE MONTRÉAL", coordinates:"45.524228,-73.58136"},
		{name:"Villeray Saint Michel Parc Extension",coordinates:"4251,+rue+du+Parc+René+Goupil+QC"},
		{name:"Pierrefonds Roxboro",coordinates:"9665,+Gouin+boulevard+West+QC"},
		{name:"BUSTE DE JOSE DE SAN MARTIN", coordinates:"45.489365,-73.580891"},
		{name:"Côte des Neiges Notre Dame de Grâce",coordinates:"3755,+rue+Botrel+QC"},
		{name:"HOMMAGE À JEAN DRAPEAU", coordinates:"45.50853,-73.55342"},
		{name:"Rosemont La Petite Patrie",coordinates:"3535,+boulevard+Rosemont+QC"},
		{name:"REMISE  (MUSÉE) (LCH)", coordinates:"45.430722,-73.666324"},
		{name:"TRIPTYQUE SUR LE PAYSAGE", coordinates:"45.575443,-73.661664"},
		{name:"NEF POUR QUATORZE REINES", coordinates:"45.49593,-73.617762"}
	],
	numbers: ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"],
	numbersDigit: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
	start: function() {
		var self = this;
		self.updateDom();
	},
	moveIndex: function() {
		if (this.index + 10 > this.locations.length - 1) {
			this.index = this.index + 10 - this.locations.length - 1;
		} else {
			this.index = this.index + 10;
		}
	},
	getLocation: function(word) {
		var i = this.numbers.indexOf(word);
		if (i == -1) {
			return null;
		}
		if(!this.locations[this.index + i].url) {
			this.locations[this.index + i].url = "https://www.google.com/maps/dir/?api=1&origin="+
					this.locations[this.index + i].coordinates +"&destination=The+Ritz+Carlton,+Montreal";
		}
		return this.locations[this.index + i];
	},
	getDom: function() {
		var self = this;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		var table = document.createElement("table");
		table.border = '0';
		var tbody = document.createElement("tbody");
		var showingIndex = this.index;
		for(i=0; i < 10; i++) {
			if(showingIndex>=this.locations.length) {
				showingIndex=0;
			}
			var row = document.createElement("tr");
			var cellNumber = document.createElement("td");
			cellNumber.classList.add("tableNumber");
			cellNumber.appendChild(document.createTextNode(this.numbersDigit[i]));
			row.appendChild(cellNumber);
			var cellName = document.createElement("td");
			cellName.classList.add("tableText");
			var name = this.locations[showingIndex].name;
			if(name.length > 25) name = name.substring(0,30);
			cellName.appendChild(document.createTextNode(name));
			row.appendChild(cellName);
			tbody.appendChild(row);
			showingIndex++;
		}
		
		table.appendChild(tbody);
		wrapper.appendChild(table);
		return wrapper;
	},
	getStyles: function () {
		return [
			"LocationList.css",
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
		if(notification === "LOAD_LOCATION") {			
			var locti = this.getLocation(payload);
			if(locti == null) {
				return;
			}
			//send urlshorten post
			this.sendNotification('SHOW_MAP', locti);
			this.updateDom();
		} else if(notification === "NEXT_LOCATIONS") {
			this.moveIndex();
			this.updateDom();
		}
	},
});
