sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"komatsufleet/test/integration/pages/EquipmentsList.gen",
	"komatsufleet/test/integration/pages/EquipmentsObjectPage.gen",
	"komatsufleet/test/integration/pages/MaintenanceLogsObjectPage.gen"
], function (JourneyRunner, EquipmentsListGenerated, EquipmentsObjectPageGenerated, MaintenanceLogsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('komatsufleet') + '/test/flp.html#app-preview',
        pages: {
			onTheEquipmentsListGenerated: EquipmentsListGenerated,
			onTheEquipmentsObjectPageGenerated: EquipmentsObjectPageGenerated,
			onTheMaintenanceLogsObjectPageGenerated: MaintenanceLogsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

