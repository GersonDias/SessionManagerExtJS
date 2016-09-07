

var sessionPanel = Ext.create('Ext.Panel', {
    items: [{ xtype: 'sessiongridpanel', flex: 3 }],
    flex: 2,
});

var detailsPanel = Ext.create('Ext.Panel', {
    html: 'details panel',
    flex: 3,
    region: 'center',
    title: 'Details',
    collapsible: true,
    collapsed: true,
    collapseDirection: 'right'
});

var speakersPanel = Ext.create('Ext.Panel', {
    html: 'speakers panel',
    flex: 1
});

var combinedSessionSpeaker = Ext.create('Ext.Panel', {
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    region: 'west',
    split: true,
    flex: 1,
    items: [sessionPanel, { xtype: 'splitter', width: 2 }, speakersPanel]
});



Ext.define('SE.view.MainView', {
    extend: 'Ext.container.Viewport',

    items: [
        combinedSessionSpeaker, detailsPanel
    ],   
    
    split: true,

    layout: {
        type: 'border',
    }
});