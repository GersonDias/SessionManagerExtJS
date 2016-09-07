Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: 'http://cdn.sencha.io/ext-4.1.1-gpl/src'
    }
});

Ext.application({
    name: 'SE',
    requires: ['SE.view.MainView'],
    views: ['Sessions'],
    launch: function () {
        Ext.create('SE.view.MainView');
    }
});