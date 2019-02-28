export default {
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: 'index',
                component: './index'
            }
            , {
                path: 'card',
                component: 'Card'
            }, {
                path: 'tree',
                component: 'Tree'
            }, {
                path: 'change',
                component: 'Change'
            }]
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
}