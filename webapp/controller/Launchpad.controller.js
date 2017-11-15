sap.ui.define([
	"ysc/websocket/controller/BaseController"
], function(Controller) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.Launchpad", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ysc.websocket.view.Launchpad
		 */
			onInit: function() {
				 var oLocalData = {"Tiles":[{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Good",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"ContentMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"LineMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 },{
				 	"title":"First",
				 	"subtitle":"Subtitle",
				 	"unit":"USD",
				 	"mode":"LineMode",
				 	"footer":"Footer",
				 	"kpivalue":100,
				 	"color":"Error",
				 	"trend":"Up",
				 	"scale":"M"
				 }]};
				var oViewModel = new sap.ui.model.json.JSONModel();
				oViewModel.setData(oLocalData);
				this.getView().setModel(oViewModel, "localModel");
				
		
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ysc.websocket.view.Launchpad
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ysc.websocket.view.Launchpad
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ysc.websocket.view.Launchpad
		 */
		//	onExit: function() {
		//
		//	}

	});

});