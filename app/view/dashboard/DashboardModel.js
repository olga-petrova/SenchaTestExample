Ext.define('Admin.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean',
        'Admin.store.dashboard.Todo'
    ],

    stores: {
        hddusage: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/area'
            }

        },
        quarterlyGrowth: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/bar'
            }
        },
        earnings: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/line'
            }
        },
        servicePerformance: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/pie'
            }            

        },
        topMovies: {
            autoLoad: true,
            model: 'Admin.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/movies'
            }
        },
        networkData: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/full'
            }
        },
        visitors: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/visitor'
            }
        },
        bounces: {
            autoLoad: true,
            model: 'Admin.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/counce'
            }
        },
        subscriptions: {
            autoLoad: true,
            model: 'Admin.model.Subscription',
            proxy: {
                type: 'api',
                url: '~api/subscriptions'
            }
        },
        todos: {
            type: 'todo'
        }
    }
});
