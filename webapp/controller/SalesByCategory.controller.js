sap.ui.define([
	"ysc/websocket/controller/BaseController",
	"sap/ui/model/Filter"
], function(Controller,Filter) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.SalesByCategory", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ysc.websocket.view.SalesByCategory
		 */
		onInit: function() {
			   this._oChart = this.byId("idVizFrame");
			   this._oTable = this.byId("idTable");
			   this._oImage = this.byId("idImage");
			   var oLocalData = {"Year":"","CategoryPicture":""};
			   var oViewModel = new sap.ui.model.json.JSONModel();
				oViewModel.setData(oLocalData);
				this.getView().setModel(oViewModel, "localModel");
			   this.getRouter().getRoute("salesByCategory").attachPatternMatched(this._onObjectMatched, this);
			},
			_onObjectMatched:function(oEvent){
				    var locModel = this.getModel("localModel");
					var sYear = oEvent.getParameter("arguments").Year;
					var aFilter = [new Filter({
						path: 'Year',
						operator: 'EQ',
						value1: sYear
					})];
				
					locModel.setProperty("/Year",sYear);
				    
				    this._oTable.getBinding("items").filter(aFilter);
				    this._oChart.getDataset().getBinding("data").filter(aFilter);
				    var that = this;
				    //picture
				    // var sCategoryName = oEvent.getParameter("arguments").CategoryName;
				    //  if(sCategoryName) {
							 //   	var sUrlPicture = "https://services.odata.org/Northwind/Northwind.svc/Categories?$filter=CategoryName eq '"+ sCategoryName +"'&$format=json";
			     //                     $.get(sUrlPicture, function( data ) {
			     //                         var sTrimmedData = data.value[0].Picture.substr(104);
			     //                         //that._oImage.setSrc("data:image/jpg;base64," + sTrimmedData);
			     //                         if (!this.pressDialog) {
			     //                         this.pressDialog = new sap.m.Dialog({
			     //                         	title : sCategoryName,
			     //                         	content : new sap.m.Image({src:"data:image/jpg;base64," + sTrimmedData})
			     //                         });
			     //                         that.getView().addDependent(this.pressDialog);
			     //                         }
			     //                         this.pressDialog.open();
			     //                         setTimeout(function(){this.pressDialog.close()}, 5000);
			     //                         //locModel.setProperty("/CategoryPicture",sTrimmedData);
			     //                     });
							 //   }
				    
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ysc.websocket.view.SalesByCategory
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ysc.websocket.view.SalesByCategory
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ysc.websocket.view.SalesByCategory
		 */
		//	onExit: function() {
		//
		//	}

	});

});