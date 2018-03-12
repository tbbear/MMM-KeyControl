/* Magic Mirror
* Module: MMM-KeyControl
* By tbbear
*/

var ara = [1,1,1,1,1,1,1,1,1,0,1,1,1];
const nam = ["Tanken","Nachrichten","Mondphasen","Uhr","Kalender","Alarme","Openhub","Wetter","Radio","Zeig dich","Spiegel","Einkaufsliste","Verkehr"];

Module.register("MMM-KeyControl", {

		// Module config defaults.
		defaults: {
			updateInterval: 10 * 1000, // every 1 minutes
			maxWidth: "100%",
			buttons: ["T","N","M","U","K","A","O","W","R","B","S","L","V"]
		},

		// Define required scripts.
		getScripts: function() {
			return ["moment.js"];
		},

		getTranslations: function() {
			return {
				en: "translations/en.json",
				de: "translations/de.json"
			};
		},
	
		getStyles: function() {
			return ["MMM-KeyControl.css", "font-awesome.css"];
		},
 

		// Define start sequence.
		start: function() {
			Log.info("Starting module: " + this.name);
			this.config.lang = this.config.lang || config.language; //automatically overrides and sets language :)
			this.sendSocketNotification("CONFIG", this.config);

			// Set locale.  
			var lang = config.language;
			setInterval(() => {
				this.updateDom();
  		        }, this.config.updateInterval);

		},

   
	      getDom: function() {

			var self = this;
			var buttonsArray = self.config.buttons;
			var buttonListWidth;
			buttonListWidth = ( buttonsArray.length * 30 ) + 1;

			var wrapper = document.createElement("div");
			wrapper.style.maxWidth = this.config.maxWidth;
  
		        var stationMenu = document.createElement("div");
			stationMenu.className = "buttonMenu";
			stationMenu.style.maxWidth = buttonListWidth;

			var statindex;
			for (statindex = 0; statindex < buttonsArray.length; ++statindex) {
				var button = buttonsArray[statindex];
				let bu = statindex
        	                var statplace = (statindex * 1) * 30 + 1;
					station = document.createElement("div");
					station.innerHTML = buttonsArray[statindex] 
					station.style.cursor = "pointer";
					if (ara[bu] == 0) {station.style.color = "red"} else {station.style.color = "green"};
					station.className = "button";
					station.style.left = statplace + "px";
					station.title = nam[bu];
					station.addEventListener("click", () => act(bu));
					stationMenu.appendChild(station);
			};
	
			wrapper.appendChild(stationMenu);

			function act(bu) {
				self.sendSocketNotification("START_KEY", bu);
			};

			return wrapper;

		},

	    notificationReceived: function (notification, payload, sender) {
	  	   if (notification === "DOM_OBJECTS_CREATED") {
			this.sendNotification('HIDE_FACE');
		   }
	    },

	    socketNotificationReceived(notification, payload) {
		var x = payload;
      	 	if (notification === 'HIDE_ALARM') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_ALARM');
	        }
	        else if (notification === 'SHOW_ALARM') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_ALARM');
	        }
	        else if (notification === 'HIDE_RADIO') {
		     ara[x] = 0;
        	     this.sendNotification('HIDE_RADIO');
	        }
        	else if (notification === 'SHOW_RADIO') {
	  	     ara[x] = 1;
	             this.sendNotification('SHOW_RADIO');
        	}
	        else if (notification === 'MIRROR_SLEEP') {
		     ara[x] = 0;
        	     this.sendNotification('MIRROR_SLEEP');
	        }
	        else if (notification === 'MIRROR_WAKE') {
	  	     ara[x] = 1;
        	     this.sendNotification('MIRROR_WAKE');
	        }
	        else if (notification === 'HIDE_CALENDAR') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_CALENDAR');
	        }
	        else if (notification === 'SHOW_CALENDAR') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_CALENDAR');
	        }
	        else if (notification === 'HIDE_CLOCK') {
		     ara[x] = 0;
        	     this.sendNotification('HIDE_CLOCK');
	        }
        	else if (notification === 'SHOW_CLOCK') {
	  	     ara[x] = 1;
	             this.sendNotification('SHOW_CLOCK');
        	}
	        else if (notification === 'HIDE_FACE') {
		     ara[x] = 0;
        	     this.sendNotification('HIDE_FACE');
		     ara[6] = 1;
	             this.sendNotification('SHOW_OPEN');
	        }
        	else if (notification === 'SHOW_FACE') {
		     ara[6] = 0;
	             this.sendNotification('HIDE_OPEN');
	  	     ara[x] = 1;
	             this.sendNotification('SHOW_FACE');
        	}
	        else if (notification === 'HIDE_MOON') {
		     ara[x] = 0;
        	     this.sendNotification('HIDE_MOON');
	        }
        	else if (notification === 'SHOW_MOON') {
	  	     ara[x] = 1;
	             this.sendNotification('SHOW_MOON');
        	}
	        else if (notification === 'HIDE_COWBOY') {
		     ara[x] = 0;
        	     this.sendNotification('HIDE_COWBOY');
        	}
	        else if (notification === 'SHOW_COWBOY') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_COWBOY');
	        }
        	else if (notification === 'HIDE_OPEN') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_OPEN');
        	}
	        else if (notification === 'SHOW_OPEN') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_OPEN');
	        }
        	else if (notification === 'HIDE_PNEWS') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_PNEWS');
        	}
	        else if (notification === 'SHOW_PNEWS') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_PNEWS');
	        }
        	else if (notification === 'HIDE_FUEL') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_FUEL');
        	}
	        else if (notification === 'SHOW_FUEL') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_FUEL');
	        }
        	else if (notification === 'HIDE_WUNDER') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_WUNDER');
        	}
	        else if (notification === 'SHOW_WUNDER') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_WUNDER');
	        }
        	else if (notification === 'HIDE_TRAFIC') {
		     ara[x] = 0;
	             this.sendNotification('HIDE_TRAFIC');
        	}
	        else if (notification === 'SHOW_TRAFIC') {
	  	     ara[x] = 1;
        	     this.sendNotification('SHOW_TRAFIC');
	        }

        	this.updateDom(300);
    	},

});