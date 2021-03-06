/**
 * @constructor
 */
var ContactPicker = function() {};


ContactPicker.prototype.chooseContact = function(success, failure) {
	cordova.exec(function(contactInfo) {
		if (device.platform == "iOS") {
			var newContactInfo = {
				displayName: contactInfo.displayName,
				email: contactInfo.email,
				phones: {
					mobileNumber: [contactInfo.phoneNumber],
					homeNumper: [],
					mobileNumber: [],
					workNumper: [],
					faxWorkNumper: [],
					faxHomeNumper: [],
					pagerNumper: [],
					otherNumper: [],
					callbackNumper: [],
					carNumper: [],
					companyMainNumper: [],
					isdnNumper: [],
					mainNumper: [],
					otherFaxNumper: [],
					radioNumper: [],
					telexNumper: [],
					ttyTddNumper: [],
					workMobileNumper: [],
					workPagerNumper: [],
					assistantNumper: [],
					mmsNumper: []
				}
			};
			success(newContactInfo);
		} else {
			success(contactInfo);
		}
	}, failure, "ContactPicker", "chooseContact", []);
};

ContactPicker.prototype.addContact = function(success, failure) {
	cordova.exec(function(contactInfo) {
		if (device.platform == "iOS") {
			var newContactInfo = {
				displayName: contactInfo.displayName,
				email: contactInfo.email,
				phones: {
					mobileNumber: [contactInfo.phoneNumber],
					homeNumper: [],
					mobileNumber: [],
					workNumper: [],
					faxWorkNumper: [],
					faxHomeNumper: [],
					pagerNumper: [],
					otherNumper: [],
					callbackNumper: [],
					carNumper: [],
					companyMainNumper: [],
					isdnNumper: [],
					mainNumper: [],
					otherFaxNumper: [],
					radioNumper: [],
					telexNumper: [],
					ttyTddNumper: [],
					workMobileNumper: [],
					workPagerNumper: [],
					assistantNumper: [],
					mmsNumper: []
				}
			};
			success(newContactInfo);
		} else {
			success(contactInfo);
		}
	}, failure, "ContactPicker", "addContact", []);
};

// Plug in to Cordova
cordova.addConstructor(function() {

	if (!window.Cordova) {
		window.Cordova = cordova;
	};


	if (!window.plugins) window.plugins = {};
	window.plugins.ContactPicker = new ContactPicker();
});