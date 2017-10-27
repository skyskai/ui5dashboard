sap.ui.define([
	"ysc/websocket/controller/BaseController",
	'sap/m/MessageToast'
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.App", {
		
		onInit:function(){
			//local model
			var oLocalData = {"Chat":[{"Title":"<Notification>","Text":"아래는 Google Assistant를 통한 요청 내용이 표시됩니다","Priority":"Low"}]};
			var oViewModel = new sap.ui.model.json.JSONModel();
			oViewModel.setData(oLocalData);
			this.getView().setModel(oViewModel, "localModel");
			var that = this;
			//Websocket오픈
			//var sUrl = "ws://127.0.0.1:8000";//local
			var sUrl = "wss://websocket3347.herokuapp.com";
			jQuery.sap.require("sap.ui.core.ws.WebSocket");
			
		    this.oWS = new sap.ui.core.ws.WebSocket(sUrl);
		    
		    var that = this;
		    this.oWS.attachOpen(function(){
		    	MessageToast.show("서버에 연결되었습니다.");	
		    });
		    
		    this.oWS.attachMessage(function (oControlEvent) {
		        // var oEntry = jQuery.parseJSON(oControlEvent.getParameter('data')).data;
		        var oReturnData = JSON.parse(JSON.parse(oControlEvent.getParameter('data')));
		        //add Request Text to Upper notification item
		        that._addTextToChat(oReturnData.forUIRequest);
		        var oInitModel = that.getModel();
		        MessageToast.show("Received:"+oReturnData.target);
		        //navTo
		        var oRouter = that.getRouter();
		        var oResult = JSON.parse(oReturnData.forUIresults);
		        switch (oResult.Action) {
		        	case "input.SalesCategory_Year":
		        		switch (oResult.Parameters.SalesCategory) {
		        			case "Country":
		        				oRouter.navTo("salesByCountry",oResult.Parameters);
		        				break;
		        			case "Category":
		        				oRouter.navTo("salesByCategory",oResult.Parameters);
		        				break;
		        			case "Product":
		        				oRouter.navTo("salesByProduct",oResult.Parameters);
		        				break;
		        			default:
		        		}
		        		
		        		break;
		        	default:
		        }
		        // switch (oReturnData.action) {
		        // 	case "navigate": //화면 전환 
		        // 		oRouter.navTo(oReturnData.target);
		        // 		break;
		        //     case "valueSelect":
		        // 	default:
		        // 	  var aBars = oInitModel.getObject("/bars");
		        // 	  for(var i=0;i<aBars.length;i++){
		        // 	  	var sCurrentRow = "/bars/"+i+"/Selected";
		        // 	  	if(aBars[i].Category === oReturnData.target){
		        // 	  		oInitModel.setProperty(sCurrentRow,true);
		        // 	  	} else {
		        // 	  		oInitModel.setProperty(sCurrentRow,false);
		        // 	  	}
		        // 	  }
		        // 	  oInitModel.setProperty("/product_detail_show",true);
		        // }
		        
		       
		       });
		       
		       // error handling
		    this.oWS.attachError(function (oControlEvent) {
		    	MessageToast.show('서버와의 연결에 실패하였습니다.');
		       }); 
		        
		       // onConnectionClose
		    this.oWS.attachClose(function (oControlEvent) {
		    	MessageToast.show('서버와의 연결이 끊겼습니다.');
		       });	
		},
		_addTextToChat:function(newText){
			var locModel = this.getModel("localModel");
			var aData = locModel.getData();
			aData.Chat.push({Title:"YOU",Text:newText});
			locModel.refresh();
		}

	});
});