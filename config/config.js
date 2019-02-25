export default {
    singular: true,
    routes: [{
        path: '/',
        component: '/',
        routes: [
            {
                path: 'ap',
                component: 'Ap'
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