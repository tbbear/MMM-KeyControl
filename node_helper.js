/* Magic Mirror
    * Module: MMM-KeyControl
    *
    * By tbbear
    * 
    */

const NodeHelper = require('node_helper');
var ara = [1,1,1,1,1,1,1,1,1,0,1,1,1];


module.exports = NodeHelper.create({
	  
    start: function() {
    	console.log("Starting module: " + this.name);
    },
    
    readKey: function(payload) {
	var x = payload;
        console.log("Key: " + x);
	switch (x) {
	case 7:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_COWBOY',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_COWBOY',x); 
		}
		break;
	case 8:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_RADIO',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_RADIO',x); 
		}
		break;
	case 9:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_FACE',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_FACE',x); 
		}
		break;
	case 10:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('MIRROR_WAKE',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('MIRROR_SLEEP',x); 
		}
		break;
	case 11:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_WUNDER',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_WUNDER',x); 
		}
		break;
	case 12:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_TRAFIC',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_TRAFIC',x); 
		}
		break;
	case 6:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_OPEN',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_OPEN',x); 
		}
		break;
	case 5:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_ALARM',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_ALARM',x); 
		}
		break;
	case 4:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_CALENDAR',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_CALENDAR',x); 
		}
		break;
	case 3:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_CLOCK',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_CLOCK',x); 
		}
		break;
	case 2:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_MOON',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_MOON',x); 
		}
		break;
	case 1:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_PNEWS',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_PNEWS',x); 
		}
		break;
	case 0:
		if(ara[x] === 0) {
		  ara[x] = 1;
		  this.sendSocketNotification('SHOW_FUEL',x);  
		} else {
		  ara[x] = 0;
			console.log("send");
		  this.sendSocketNotification('HIDE_FUEL',x); 
		}
		break;
	}
    },
    
    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
    	if(notification === 'CONFIG'){
		this.config = payload;
	    } else if (notification === 'START_KEY') {
  		this.readKey(payload);
 	    }
         },  
});