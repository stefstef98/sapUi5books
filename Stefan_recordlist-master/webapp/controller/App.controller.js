sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
   "sap/m/MessageToast"
], function (Controller,MessageToast, Sorter, Filter, FilterOperator, FilterType) {
   "use strict";
   return Controller.extend("org.ubb.books.controller.App", {
      onInit: function () {

      },
      navToDetail: function(){
         if (!this.newBookDialog) {
				this.newBookDialog = sap.ui.xmlfragment("org.ubb.books.view.dialog", this);
			}
			this.getView().addDependent(this.newBookDialog);
			// debugger;
			var aItems = this.newBookDialog.getContent()[0].getContent();
			var oControl = aItems[15];
			//oControl.setText("Save");
			this.newBookDialog.open();
      },
      handleSaveBtnBook: function (oEvent) {
			debugger;
			var bCreate = true;
			var oBook = {
				RecordsId:"",
				Isbn: "",
				FirstName: "LSTEFAN-TEOD",
				LastName: "LSTEFAN-TEOD",
				DateCheckout: "",
				DateReturn: ""
			};
			var oSimpleForm = oEvent.getSource().getParent().getParent();
			var aItems = oSimpleForm.getFormElements();
			var oControl = aItems[0].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.RecordsId = parseInt(oControl.getValue());
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Isbn = parseInt(oControl.getValue());
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.DateCheckout = oControl.getValue();
				oBook.DateReturn = oControl.getValue();
				//oBook.Pdate = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			
			this.getView().getModel().setUseBatch(false);
				if (bCreate) {
						this.getView().getModel().create('/RECORD_STLESet', oBook, {
							success: function () {
								MessageToast.show("Book was checked out succesfully!");
							},
							error: function () {
								MessageToast.show("Error by booking!");
							}
						});

						this.newBookDialog.close();
         }
		},
		handleUpdateBtnBook: function (oEvent) {
			debugger;
			var bCreate = true;
			var oBook = {
				Isbn: "",
				Title: "",
				Author: "",
				DatePublished: "",
				Language: "",
				TotalNr: 0,
				BooksAvailable: 0,
				CreatedOn: "",
				CreatedBy: "LSTEFAN-TEOD",
				ChangedOn: "",
				ChangedBy: "LSTEFAN-TEOD"
			};
			var oSimpleForm = oEvent.getSource().getParent().getParent();
			var aItems = oSimpleForm.getFormElements();
			var oControl = aItems[0].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Isbn = parseInt(oControl.getValue());
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Title = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[2].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.DatePublished = oControl.getValue();
				oBook.CreatedOn = oControl.getValue();
				oBook.ChangedOn = oControl.getValue();
				//oBook.Pdate = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.TotalNr = parseInt(oControl.getValue());
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[6].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.BooksAvailable = parseInt(oControl.getValue());
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			this.getView().getModel().setUseBatch(false);
			var oButtonPressed = this.newBookDialog.getContent()[0].getContent()[15];
			var oButtonText = oButtonPressed.getText();
			if (oButtonText === "Save") {
				if (bCreate) {
					if (oBook.TotalNr >= oBook.BooksAvailable) {
						this.getView().getModel().update("/BOOKS_SIGHSet(Isbn="+oBook.Isbn+")", oBook, {
							success: function () {
								MessageToast.show("Book updated!");
							},
							error: function () {
								MessageToast.show("Book Error update!");
							}
						});

						this.newBookDialog.close();
						
               }
            }
         }
		},
      handleCancelBtnPress: function(oEvent){
         var oSimpleForm = oEvent.getSource().getParent().getParent();
			var aItems = oSimpleForm.getFormElements();
			for (var i = 0; i < aItems.length - 1; i++) {
				aItems[i].getFields()[0].setValue("");
			}
			this.newBookDialog.close();
	  },
	  handleUpdateCancelBtnPress: function(oEvent){
		var oSimpleForm = oEvent.getSource().getParent().getParent();
		   var aItems = oSimpleForm.getFormElements();
		   for (var i = 0; i < aItems.length - 1; i++) {
			   aItems[i].getFields()[0].setValue("");
		   }
		   this.newBookDialog.close();
	 },
	  onDeleteRow: function(oEvent){
		debugger;
		var oSelectedItem = oEvent.getSource().getBindingContext().getObject();
		var sPath = oSelectedItem.RecordsId;
		this.getView().getModel().remove("/RECORD_STLESet(RecordsId="+oSelectedItem.RecordsId+")", {
			success: function () {
				MessageToast.show("Checkout of Book deleted!");
			},
			error: function () {
				MessageToast.show("Checkout of Book could not be deleted!");
			}
		});
	  },
	  onSelectUpdate: function(oEvent){
		if (!this.newBookDialog) {
			this.newBookDialog = sap.ui.xmlfragment("org.ubb.books.view.dialog", this);
		}
		this.getView().addDependent(this.newBookDialog);
		debugger;
		var oSelectedItem = oEvent.getSource().getBindingContext().getObject();
		//this.newBookDialog.getModel().setData(oSelectedItem);
		var aItems = this.newBookDialog.getContent()[0].getContent();
		var oControl = aItems[3];
		oControl.setValue(oSelectedItem.Isbn);
			
		this.newBookDialog.open();
	  },
	  onSearch : function () {
		debugger;
		var oRecordList = this.getView().byId("idBooksTable");
		var oItemsBinding = oRecordList.getBinding("items");

		var sValues = this.getView().byId("searchField").getValue();

		var NameFilter = new sap.ui.model.Filter("FirstName", sap.ui.model.FilterOperator.EQ, sValues);
		var LNameFilter = new sap.ui.model.Filter();
		if(sValues.length <1){
			oItemsBinding.filter();
		}else{
		oItemsBinding.filter(NameFilter);}
	},
	onSortDescending: function(){
		debugger;
		var sOrder = new sap.ui.model.Sorter("Isbn",true,null);
		this.getView().byId("idBooksTable").getBinding("items").sort(sOrder);
	},
	onSortAscending: function(){
		debugger;
		var sOrder = new sap.ui.model.Sorter("Isbn",false,null);
		this.getView().byId("idBooksTable").getBinding("items").sort(sOrder);
	}
	
      
      
   });
});