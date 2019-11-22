class Observable {
	constructor() {
		this.listeners = {};
	}

	// Подписаться.
	on(e, callback) {
		if (this.listeners[e] == undefined) {
            this.listeners[e] = {};

		    this.listeners[e].eventProperty = {};
		    this.listeners[e].eventProperty.isOnOnce = false;

		    this.listeners[e].data = [];
        }
        this.listeners[e].data.push(callback);
        console.log('успешно подписан!');
        
	}

	// Подписаться единожды.
	onOnce(e, callback) {
		this.on(e, callback);
		this.listeners[e].eventProperty.isOnOnce = true;
	}

	// Отписаться.
	off(e, callback) {
		this.listeners[e].data = this.listeners[e].data.
			filter(function (listener) { return listener !== callback; });
	}

	// Разослать сообщение подписчикам.
	emit(e, data) {
		if (this.listeners[e] == undefined || this.listeners[e].data == undefined) {
			return;
		}

		let itObj = this;		

		this.listeners[e].data.forEach(listener => {
			if(itObj.listeners[e].eventProperty.isOnOnce) {
				itObj.off(e, itObj.listeners[e].data[0]);
			}	
			listener(data);
		});
	}
}

user = new Observable;
user.on();