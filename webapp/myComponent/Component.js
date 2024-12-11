sap.ui.define(["sap/ui/core/UIComponent",
            "sap/suite/ui/generic/template/extensionAPI/ReuseComponentSupport"],
    function (UIComponent, ReuseComponentSupport) {
        "use strict";

        return UIComponent.extend("travelcrud.component.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                ReuseComponentSupport.mixInto(this, "component");
                (UIComponent.prototype.init || jQuery.noop).apply(this, arguments);
            },
            stStart: function (oModel, oBindingContext, oExtensionAPI) {
                var oComponentModel = this.getComponentModel();
                this.getRootControl().setModel(oModel);
                oComponentModel.setProperty("/navigationController", oExtensionAPI.getNavigationController());
                oComponentModel.setProperty("/selectedNode", oExtensionAPI.getNavigationController().getCurrentKeys()[1]);
                this.extensionAPI = oExtensionAPI;
            },
            stRefresh: function (oModel, oBindingContext) {
                var oComponentModel = this.getComponentModel();
                var oNavigationController = oComponentModel.getProperty("/navigationController");
                oComponentModel.setProperty("/selectedNode", oNavigationController.getCurrentKeys()[1]);
                this.getRootControl().getController().updateSelection();
            }
        });
    });
