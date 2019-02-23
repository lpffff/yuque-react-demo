export default {
    singular: true,
    routes: [{
        path: '/',
        component: './hello',
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],
}