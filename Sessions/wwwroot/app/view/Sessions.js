Ext.define('SE.view.Sessions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongridpanel',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            var formWindow = Ext.create('SessionForm');

            var form = formWindow.down('form');
            form.loadRecord(record);

            formWindow.show();
        }
    },
    store: {
        fields: [
            'id',
            'title',
            'approved',
            {
                dateFormat: 'c',
                name: 'sessionTimeDateTime',
                sortType: 'asDate',
                type: 'date'
            },
            {
                convert: function (v, rec) {
                    var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a');
                    var pretty = convertIt(rec.get("sessionTimeDateTime"));
                    return pretty;
                },
                name: 'sessionTimePretty',
                type: 'string'
            }

        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: '/wwwroot/data/sessions.json',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: [
            { property: 'approved' },
            { property: 'title' }
        ],
        groupField: 'sessionTimeDateTime'

    },
    columns: [
        { xtype: 'gridcolumn', dataIndex: 'id', text: 'Id' },
        { xtype: 'gridcolumn', dataIndex: 'title', text: 'Title', flex: 1 },
        { xtype: 'gridcolumn', dataIndex: 'approved', text: 'Approved' },
        { dataIndex: 'sessionTimePretty', text: 'Session Start Time', width: 180 }
    ],
    features: [
        { ftype: 'grouping', groupHeaderTpl: '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})' }
    ]
});
