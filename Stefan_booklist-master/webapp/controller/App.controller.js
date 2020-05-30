sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller,MessageToast) {
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
			oControl.setText("Save");
			this.newBookDialog.open();
      },
      handleSaveBtnBook: function (oEvent) {
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
						this.getView().getModel().create('/BOOKS_STLESet', oBook, {
							success: function () {
								MessageToast.show("Book inserted!");
							},
							error: function () {
								MessageToast.show("Book already exists!");
							}
						});

						this.newBookDialog.close();
						
               }
            }
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
			var oButtonPressed = this.newBookDialog1.getContent()[0].getContent()[15];
			var oButtonText = oButtonPressed.getText();
			if (oButtonText === "Save") {
				if (bCreate) {
					if (oBook.TotalNr >= oBook.BooksAvailable) {
						this.getView().getModel().update("/BOOKS_STLESet(Isbn="+oBook.Isbn+")", oBook, {
							success: function () {
								MessageToast.show("Book updated!");
							},
							error: function () {
								MessageToast.show("Book Error update!");
							}
						});

						this.newBookDialog1.close();
						
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
		   this.newBookDialog1.close();
	 },
	  onDeleteRow: function(oEvent){
		debugger;
		var oSelectedItem = oEvent.getSource().getBindingContext().getObject();
		var sPath = oSelectedItem.Isbn;
		this.getView().getModel().remove("/BOOKS_STLESet(Isbn="+oSelectedItem.Isbn+")", {
			success: function () {
				MessageToast.show("Book deleted!");
			},
			error: function () {
				MessageToast.show("Book could not be deleted!");
			}
		});
	  },
	  onSelectUpdate: function(oEvent){
		if (!this.newBookDialog1) {
			this.newBookDialog1 = sap.ui.xmlfragment("org.ubb.books.view.dialogupdate", this);
		}
		this.getView().addDependent(this.newBookDialog1);
		debugger;
		var oSelectedItem = oEvent.getSource().getBindingContext().getObject();
		//this.newBookDialog.getModel().setData(oSelectedItem);
		var aItems = this.newBookDialog1.getContent()[0].getContent();
		var oControl = aItems[1];
		oControl.setValue(oSelectedItem.Isbn);
		oControl = aItems[3];
		oControl.setValue(oSelectedItem.Title);
		oControl = aItems[5];
		oControl.setValue(oSelectedItem.Author);
		oControl = aItems[7];
		oControl.setValue(oSelectedItem.DatePublished);
		oControl = aItems[9];
		oControl.setValue(oSelectedItem.Language);
		oControl = aItems[11];
		oControl.setValue(oSelectedItem.TotalNr);
		oControl = aItems[13];
		oControl.setValue(oSelectedItem.BooksAvailable);
		oControl = aItems[15];
		
		oControl.setText("Save");
			
		this.newBookDialog1.open();
	  },
	  onSearch : function () {
		debugger;
		var oRecordList = this.getView().byId("idBooksTable");
		var oItemsBinding = oRecordList.getBinding("items");

		var sValues = this.getView().byId("searchField").getValue();

		var NameFilter = new sap.ui.model.Filter("Author", sap.ui.model.FilterOperator.EQ, sValues);
		var LNameFilter = new sap.ui.model.Filter("Title", sap.ui.model.FilterOperator.EQ, sValues);
		var oFIlter = new sap.ui.model.Filter([NameFilter,LNameFilter],false);
		if(sValues.length <1){
			oItemsBinding.filter();
		}else{
		oItemsBinding.filter(oFIlter);}
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