sap.ui.define([
	"ysc/websocket/controller/BaseController",
	"sap/ui/model/Filter"
], function(Controller,Filter) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.SalesCompare", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ysc.websocket.view.SalesCompare
		 */
		onInit: function() {
			   this._oChart = this.byId("idVizFrame");
			   this._oTable = this.byId("idTable");
			   var oLocalData = {"Country":""};
			   var oViewModel = new sap.ui.model.json.JSONModel();
				oViewModel.setData(oLocalData);
				this.getView().setModel(oViewModel, "localModel");
			   this.getRouter().getRoute("salesCompare").attachPatternMatched(this._onObjectMatched, this);
			},
			_onObjectMatched:function(oEvent){
				    var locModel = this.getModel("localModel");
				
					var iYearFrom = oEvent.getParameter("arguments").YearFrom;
					var iYearTo = oEvent.getParameter("arguments").YearTo;
					var sCountryName = oEvent.getParameter("arguments").CountryName;
					var aFilterYear = [
						new Filter({
						path: 'Year',
						operator: 'EQ',
						value1: iYearFrom}),
						new Filter({
						path: 'Year',
						operator: 'EQ',
						value1: iYearTo})
						];
				    var aFilterTemp = new Filter({filters:aFilterYear,and:false});
				    //when countri is ALL
				    var aFilterCountry = "";
				    if(sCountryName==='ALL'){
				     aFilterCountry = new Filter({path: 'Country',operator: 'ALL',value1: sCountryName});
				    } else {
				     aFilterCountry = new Filter({path: 'Country',operator: 'EQ',value1: sCountryName});
				    }
				    var aFilter = new Filter({filters:[aFilterTemp,aFilterCountry],and:true});
					locModel.setProperty("/Country",sCountryName);
					this._oTable.getBinding("items").filter(aFilter,"Application");
				    this._oChart.getDataset().getBinding("data").filter(aFilter,"Application");
				    
			}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ysc.websocket.view.SalesCompare
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ysc.websocket.view.SalesCompare
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ysc.websocket.view.SalesCompare
		 */
		//	onExit: function() {
		//
		//	}

	});

});