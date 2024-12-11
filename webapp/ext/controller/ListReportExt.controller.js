sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    return {
        onMassCreate: function (oEvent) {
            var oApi = this.extensionAPI;
            var oNavigationController = oApi.getNavigationController();
            oNavigationController.navigateInternal("", { "routeName": "toMassCreate" });
        }
    }
})