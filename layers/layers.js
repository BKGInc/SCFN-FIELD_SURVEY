var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SCFN150ABoundary_1 = new ol.format.GeoJSON();
var features_SCFN150ABoundary_1 = format_SCFN150ABoundary_1.readFeatures(json_SCFN150ABoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCFN150ABoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCFN150ABoundary_1.addFeatures(features_SCFN150ABoundary_1);
var lyr_SCFN150ABoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCFN150ABoundary_1, 
                style: style_SCFN150ABoundary_1,
                popuplayertitle: "SCFN #150A Boundary",
                interactive: true,
                title: '<img src="styles/legend/SCFN150ABoundary_1.png" /> SCFN #150A Boundary'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_Bridge_3 = new ol.format.GeoJSON();
var features_Bridge_3 = format_Bridge_3.readFeatures(json_Bridge_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bridge_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridge_3.addFeatures(features_Bridge_3);
var lyr_Bridge_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bridge_3, 
                style: style_Bridge_3,
                popuplayertitle: "Bridge",
                interactive: true,
                title: '<img src="styles/legend/Bridge_3.png" /> Bridge'
            });
var format_StorageFacility_4 = new ol.format.GeoJSON();
var features_StorageFacility_4 = format_StorageFacility_4.readFeatures(json_StorageFacility_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StorageFacility_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StorageFacility_4.addFeatures(features_StorageFacility_4);cluster_StorageFacility_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_StorageFacility_4
});
var lyr_StorageFacility_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_StorageFacility_4, 
                style: style_StorageFacility_4,
                popuplayertitle: "Storage Facility",
                interactive: true,
                title: '<img src="styles/legend/StorageFacility_4.png" /> Storage Facility'
            });
var format_Driveway_5 = new ol.format.GeoJSON();
var features_Driveway_5 = format_Driveway_5.readFeatures(json_Driveway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveway_5.addFeatures(features_Driveway_5);
var lyr_Driveway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Driveway_5, 
                style: style_Driveway_5,
                popuplayertitle: "Driveway",
                interactive: true,
                title: '<img src="styles/legend/Driveway_5.png" /> Driveway'
            });
var format_Roadway_6 = new ol.format.GeoJSON();
var features_Roadway_6 = format_Roadway_6.readFeatures(json_Roadway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadway_6.addFeatures(features_Roadway_6);
var lyr_Roadway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadway_6, 
                style: style_Roadway_6,
                popuplayertitle: "Roadway",
                interactive: true,
                title: '<img src="styles/legend/Roadway_6.png" /> Roadway'
            });
var format_Culvert_7 = new ol.format.GeoJSON();
var features_Culvert_7 = format_Culvert_7.readFeatures(json_Culvert_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culvert_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culvert_7.addFeatures(features_Culvert_7);cluster_Culvert_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Culvert_7
});
var lyr_Culvert_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Culvert_7, 
                style: style_Culvert_7,
                popuplayertitle: "Culvert",
                interactive: true,
                title: '<img src="styles/legend/Culvert_7.png" /> Culvert'
            });
var format_FireHydrant_8 = new ol.format.GeoJSON();
var features_FireHydrant_8 = format_FireHydrant_8.readFeatures(json_FireHydrant_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHydrant_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHydrant_8.addFeatures(features_FireHydrant_8);cluster_FireHydrant_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FireHydrant_8
});
var lyr_FireHydrant_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FireHydrant_8, 
                style: style_FireHydrant_8,
                popuplayertitle: "Fire Hydrant",
                interactive: true,
                title: '<img src="styles/legend/FireHydrant_8.png" /> Fire Hydrant'
            });
var format_GarbageBin_9 = new ol.format.GeoJSON();
var features_GarbageBin_9 = format_GarbageBin_9.readFeatures(json_GarbageBin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarbageBin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarbageBin_9.addFeatures(features_GarbageBin_9);cluster_GarbageBin_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GarbageBin_9
});
var lyr_GarbageBin_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GarbageBin_9, 
                style: style_GarbageBin_9,
                popuplayertitle: "Garbage Bin",
                interactive: true,
                title: '<img src="styles/legend/GarbageBin_9.png" /> Garbage Bin'
            });
var format_GasMeter_10 = new ol.format.GeoJSON();
var features_GasMeter_10 = format_GasMeter_10.readFeatures(json_GasMeter_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasMeter_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasMeter_10.addFeatures(features_GasMeter_10);cluster_GasMeter_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GasMeter_10
});
var lyr_GasMeter_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GasMeter_10, 
                style: style_GasMeter_10,
                popuplayertitle: "Gas Meter",
                interactive: true,
                title: '<img src="styles/legend/GasMeter_10.png" /> Gas Meter'
            });
var format_PowerlinePole_11 = new ol.format.GeoJSON();
var features_PowerlinePole_11 = format_PowerlinePole_11.readFeatures(json_PowerlinePole_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerlinePole_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerlinePole_11.addFeatures(features_PowerlinePole_11);cluster_PowerlinePole_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PowerlinePole_11
});
var lyr_PowerlinePole_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PowerlinePole_11, 
                style: style_PowerlinePole_11,
                popuplayertitle: "Powerline Pole",
                interactive: true,
                title: '<img src="styles/legend/PowerlinePole_11.png" /> Powerline Pole'
            });
var format_SepticTank_12 = new ol.format.GeoJSON();
var features_SepticTank_12 = format_SepticTank_12.readFeatures(json_SepticTank_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SepticTank_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SepticTank_12.addFeatures(features_SepticTank_12);cluster_SepticTank_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SepticTank_12
});
var lyr_SepticTank_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SepticTank_12, 
                style: style_SepticTank_12,
                popuplayertitle: "Septic Tank",
                interactive: true,
                title: '<img src="styles/legend/SepticTank_12.png" /> Septic Tank'
            });
var format_SewerManhole_13 = new ol.format.GeoJSON();
var features_SewerManhole_13 = format_SewerManhole_13.readFeatures(json_SewerManhole_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerManhole_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerManhole_13.addFeatures(features_SewerManhole_13);cluster_SewerManhole_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SewerManhole_13
});
var lyr_SewerManhole_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SewerManhole_13, 
                style: style_SewerManhole_13,
                popuplayertitle: "Sewer Manhole",
                interactive: true,
                title: '<img src="styles/legend/SewerManhole_13.png" /> Sewer Manhole'
            });
var format_Streetlight_14 = new ol.format.GeoJSON();
var features_Streetlight_14 = format_Streetlight_14.readFeatures(json_Streetlight_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streetlight_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streetlight_14.addFeatures(features_Streetlight_14);cluster_Streetlight_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Streetlight_14
});
var lyr_Streetlight_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Streetlight_14, 
                style: style_Streetlight_14,
                popuplayertitle: "Streetlight",
                interactive: true,
                title: '<img src="styles/legend/Streetlight_14.png" /> Streetlight'
            });
var format_TrafficSignage_15 = new ol.format.GeoJSON();
var features_TrafficSignage_15 = format_TrafficSignage_15.readFeatures(json_TrafficSignage_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficSignage_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficSignage_15.addFeatures(features_TrafficSignage_15);cluster_TrafficSignage_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TrafficSignage_15
});
var lyr_TrafficSignage_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TrafficSignage_15, 
                style: style_TrafficSignage_15,
                popuplayertitle: "Traffic Signage",
                interactive: true,
                title: '<img src="styles/legend/TrafficSignage_15.png" /> Traffic Signage'
            });
var format_Cistern_16 = new ol.format.GeoJSON();
var features_Cistern_16 = format_Cistern_16.readFeatures(json_Cistern_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cistern_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cistern_16.addFeatures(features_Cistern_16);cluster_Cistern_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Cistern_16
});
var lyr_Cistern_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cistern_16, 
                style: style_Cistern_16,
                popuplayertitle: "Cistern",
                interactive: true,
                title: '<img src="styles/legend/Cistern_16.png" /> Cistern'
            });
var format_WaterValve_17 = new ol.format.GeoJSON();
var features_WaterValve_17 = format_WaterValve_17.readFeatures(json_WaterValve_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterValve_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterValve_17.addFeatures(features_WaterValve_17);cluster_WaterValve_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WaterValve_17
});
var lyr_WaterValve_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WaterValve_17, 
                style: style_WaterValve_17,
                popuplayertitle: "Water Valve",
                interactive: true,
                title: '<img src="styles/legend/WaterValve_17.png" /> Water Valve'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_SCFN150ABoundary_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_Bridge_3.setVisible(true);lyr_StorageFacility_4.setVisible(true);lyr_Driveway_5.setVisible(true);lyr_Roadway_6.setVisible(true);lyr_Culvert_7.setVisible(true);lyr_FireHydrant_8.setVisible(true);lyr_GarbageBin_9.setVisible(true);lyr_GasMeter_10.setVisible(true);lyr_PowerlinePole_11.setVisible(true);lyr_SepticTank_12.setVisible(true);lyr_SewerManhole_13.setVisible(true);lyr_Streetlight_14.setVisible(true);lyr_TrafficSignage_15.setVisible(true);lyr_Cistern_16.setVisible(true);lyr_WaterValve_17.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_SCFN150ABoundary_1,lyr_Buildings_2,lyr_Bridge_3,lyr_StorageFacility_4,lyr_Driveway_5,lyr_Roadway_6,lyr_Culvert_7,lyr_FireHydrant_8,lyr_GarbageBin_9,lyr_GasMeter_10,lyr_PowerlinePole_11,lyr_SepticTank_12,lyr_SewerManhole_13,lyr_Streetlight_14,lyr_TrafficSignage_15,lyr_Cistern_16,lyr_WaterValve_17];
lyr_SCFN150ABoundary_1.set('fieldAliases', {'INDIAN_ID': 'INDIAN_ID', 'PID': 'PID', 'GEONAME': 'GEONAME', 'GEOCODE': 'GEOCODE', });
lyr_Buildings_2.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Roofing ma': 'Roofing ma', 'Condition': 'Condition', 'Conditon': 'Conditon', 'Exterior F': 'Exterior F', 'Home owner': 'Home owner', 'Foundation': 'Foundation', 'Constructi': 'Constructi', 'Number of': 'Number of', 'Number o_1': 'Number o_1', 'Municipal': 'Municipal', 'Comments': 'Comments', 'Number o_2': 'Number o_2', 'Height': 'Height', });
lyr_Bridge_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_StorageFacility_4.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Height': 'Height', 'Comments': 'Comments', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Constructi': 'Constructi', 'Dimension': 'Dimension', 'Exterior M': 'Exterior M', });
lyr_Driveway_5.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Constructi': 'Constructi', 'Access Con': 'Access Con', 'Width': 'Width', 'Usage': 'Usage', 'Length': 'Length', 'Comments': 'Comments', });
lyr_Roadway_6.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Roadway Ty': 'Roadway Ty', 'Width': 'Width', 'Constructi': 'Constructi', 'Length': 'Length', 'Comments': 'Comments', });
lyr_Culvert_7.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Length': 'Length', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Diameter': 'Diameter', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Comments': 'Comments', });
lyr_FireHydrant_8.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Hydrant Ty': 'Hydrant Ty', 'Constructi': 'Constructi', 'Height (ft': 'Height (ft', 'Color Codi': 'Color Codi', });
lyr_GarbageBin_9.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Unit': 'Unit', 'Constructi': 'Constructi', });
lyr_GasMeter_10.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Mounting T': 'Mounting T', 'Dialog or': 'Dialog or', 'Body Mater': 'Body Mater', 'Type_1': 'Type_1', 'Depth': 'Depth', 'Height': 'Height', 'Comments': 'Comments', });
lyr_PowerlinePole_11.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'field_11': 'field_11', 'Phases': 'Phases', 'Height': 'Height', 'Is a trans': 'Is a trans', 'Number of': 'Number of', 'Pole numbe': 'Pole numbe', 'Constructi': 'Constructi', 'Energy Pro': 'Energy Pro', 'Comments': 'Comments', });
lyr_SepticTank_12.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Capacitiy': 'Capacitiy', 'Usage': 'Usage', 'Constructi': 'Constructi', 'Covering': 'Covering', 'Comments': 'Comments', });
lyr_SewerManhole_13.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Usage': 'Usage', 'Depth': 'Depth', 'Cover Mate': 'Cover Mate', 'Manhole Ty': 'Manhole Ty', 'Lid Types': 'Lid Types', 'Diameter': 'Diameter', 'Length': 'Length', });
lyr_Streetlight_14.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Wiring & e': 'Wiring & e', 'Light Fixt': 'Light Fixt', 'Control Sy': 'Control Sy', 'Material': 'Material', 'Base Ancho': 'Base Ancho', 'Source': 'Source', });
lyr_TrafficSignage_15.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Height': 'Height', 'Size': 'Size', 'Materials': 'Materials', 'Comments': 'Comments', });
lyr_Cistern_16.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Type_1': 'Type_1', 'Usage': 'Usage', 'Capacity': 'Capacity', 'Constructi': 'Constructi', 'Comments': 'Comments', });
lyr_WaterValve_17.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Type_1': 'Type_1', 'Conditon R': 'Conditon R', 'Condition': 'Condition', 'Usage': 'Usage', 'Diameter': 'Diameter', 'Constructi': 'Constructi', 'Capacity': 'Capacity', 'Comments': 'Comments', });
lyr_SCFN150ABoundary_1.set('fieldImages', {'INDIAN_ID': 'TextEdit', 'PID': 'TextEdit', 'GEONAME': 'TextEdit', 'GEOCODE': 'TextEdit', });
lyr_Buildings_2.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Roofing ma': 'TextEdit', 'Condition': 'TextEdit', 'Conditon': 'TextEdit', 'Exterior F': 'TextEdit', 'Home owner': 'TextEdit', 'Foundation': 'TextEdit', 'Constructi': 'TextEdit', 'Number of': 'TextEdit', 'Number o_1': 'TextEdit', 'Municipal': 'TextEdit', 'Comments': 'TextEdit', 'Number o_2': 'TextEdit', 'Height': 'TextEdit', });
lyr_Bridge_3.set('fieldImages', {'id': '', 'Name': '', });
lyr_StorageFacility_4.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Height': 'TextEdit', 'Comments': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Constructi': 'TextEdit', 'Dimension': 'TextEdit', 'Exterior M': 'TextEdit', });
lyr_Driveway_5.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Constructi': 'TextEdit', 'Access Con': 'TextEdit', 'Width': 'TextEdit', 'Usage': 'TextEdit', 'Length': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Roadway_6.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Roadway Ty': 'TextEdit', 'Width': 'TextEdit', 'Constructi': 'TextEdit', 'Length': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Culvert_7.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Length': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Diameter': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Comments': 'TextEdit', });
lyr_FireHydrant_8.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Hydrant Ty': 'TextEdit', 'Constructi': 'TextEdit', 'Height (ft': 'TextEdit', 'Color Codi': 'TextEdit', });
lyr_GarbageBin_9.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Unit': 'TextEdit', 'Constructi': 'TextEdit', });
lyr_GasMeter_10.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Mounting T': 'TextEdit', 'Dialog or': 'TextEdit', 'Body Mater': 'TextEdit', 'Type_1': 'TextEdit', 'Depth': 'TextEdit', 'Height': 'TextEdit', 'Comments': 'TextEdit', });
lyr_PowerlinePole_11.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'ExternalResource', 'Condition': 'TextEdit', 'field_11': 'TextEdit', 'Phases': 'TextEdit', 'Height': 'TextEdit', 'Is a trans': 'TextEdit', 'Number of': 'TextEdit', 'Pole numbe': 'TextEdit', 'Constructi': 'TextEdit', 'Energy Pro': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SepticTank_12.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Capacitiy': 'TextEdit', 'Usage': 'TextEdit', 'Constructi': 'TextEdit', 'Covering': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SewerManhole_13.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Usage': 'TextEdit', 'Depth': 'TextEdit', 'Cover Mate': 'TextEdit', 'Manhole Ty': 'TextEdit', 'Lid Types': 'TextEdit', 'Diameter': 'TextEdit', 'Length': 'TextEdit', });
lyr_Streetlight_14.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Wiring & e': 'TextEdit', 'Light Fixt': 'TextEdit', 'Control Sy': 'TextEdit', 'Material': 'TextEdit', 'Base Ancho': 'TextEdit', 'Source': 'TextEdit', });
lyr_TrafficSignage_15.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Height': 'TextEdit', 'Size': 'TextEdit', 'Materials': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Cistern_16.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'Type_1': 'TextEdit', 'Usage': 'TextEdit', 'Capacity': 'TextEdit', 'Constructi': 'TextEdit', 'Comments': 'TextEdit', });
lyr_WaterValve_17.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'ExternalResource', 'Type_1': 'TextEdit', 'Conditon R': 'TextEdit', 'Condition': 'TextEdit', 'Usage': 'TextEdit', 'Diameter': 'TextEdit', 'Constructi': 'TextEdit', 'Capacity': 'TextEdit', 'Comments': 'TextEdit', });
lyr_SCFN150ABoundary_1.set('fieldLabels', {'INDIAN_ID': 'inline label - visible with data', 'PID': 'inline label - visible with data', 'GEONAME': 'inline label - visible with data', 'GEOCODE': 'inline label - visible with data', });
lyr_Buildings_2.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Roofing ma': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditon': 'inline label - visible with data', 'Exterior F': 'inline label - visible with data', 'Home owner': 'inline label - visible with data', 'Foundation': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Number of': 'inline label - visible with data', 'Number o_1': 'inline label - visible with data', 'Municipal': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'Number o_2': 'inline label - visible with data', 'Height': 'inline label - visible with data', });
lyr_Bridge_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_StorageFacility_4.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Comments': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Dimension': 'inline label - visible with data', 'Exterior M': 'inline label - visible with data', });
lyr_Driveway_5.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Access Con': 'inline label - visible with data', 'Width': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Roadway_6.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Roadway Ty': 'inline label - visible with data', 'Width': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Culvert_7.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_FireHydrant_8.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Hydrant Ty': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Height (ft': 'inline label - visible with data', 'Color Codi': 'inline label - visible with data', });
lyr_GarbageBin_9.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Unit': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', });
lyr_GasMeter_10.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Mounting T': 'inline label - visible with data', 'Dialog or': 'inline label - visible with data', 'Body Mater': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Depth': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_PowerlinePole_11.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'field_11': 'inline label - visible with data', 'Phases': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Is a trans': 'inline label - visible with data', 'Number of': 'inline label - visible with data', 'Pole numbe': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Energy Pro': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_SepticTank_12.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Capacitiy': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Covering': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_SewerManhole_13.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Depth': 'inline label - visible with data', 'Cover Mate': 'inline label - visible with data', 'Manhole Ty': 'inline label - visible with data', 'Lid Types': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Length': 'inline label - visible with data', });
lyr_Streetlight_14.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Wiring & e': 'inline label - visible with data', 'Light Fixt': 'inline label - visible with data', 'Control Sy': 'inline label - visible with data', 'Material': 'inline label - visible with data', 'Base Ancho': 'inline label - visible with data', 'Source': 'inline label - visible with data', });
lyr_TrafficSignage_15.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Size': 'inline label - visible with data', 'Materials': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_Cistern_16.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_WaterValve_17.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Conditon R': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Comments': 'inline label - visible with data', });
lyr_WaterValve_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});