sap.ui.define([
	"ysc/websocket/controller/BaseController",
	'sap/m/MessageToast'
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("ysc.websocket.controller.App", {
		
		onInit:function(){
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
		        var oInitModel = that.getModel();
		        MessageToast.show("Received:"+oReturnData.target);
		        //navTo
		        var oRouter = that.getRouter();
		        switch (oReturnData.action) {
		        	case "navigate": //화면 전환 
		        		oRouter.navTo(oReturnData.target);
		        		break;
		            case "valueSelect":
		        	default:
		        	  var aBars = oInitModel.getObject("/bars");
		        	  for(var i=0;i<aBars.length;i++){
		        	  	var sCurrentRow = "/bars/"+i+"/Selected";
		        	  	if(aBars[i].Category === oReturnData.target){
		        	  		oInitModel.setProperty(sCurrentRow,true);
		        	  	} else {
		        	  		oInitModel.setProperty(sCurrentRow,false);
		        	  	}
		        	  }
		        	  oInitModel.setProperty("/product_detail_show",true);
		        }
		        
		       
		       });
		       
		       // error handling
		    this.oWS.attachError(function (oControlEvent) {
		    	MessageToast.show('서버와의 연결에 실패하였습니다.');
		       }); 
		        
		       // onConnectionClose
		    this.oWS.attachClose(function (oControlEvent) {
		    	MessageToast.show('서버와의 연결이 끊겼습니다.');
		       });	
		}

	});
});