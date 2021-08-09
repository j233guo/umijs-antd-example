export default {
    'get /ds/list': function (req, res) { //模拟请求返回数据
        res.json({
            data: [1, 2, 3, 4, 5],
            maxNum: 5
        });
    }, 
    'get /ds/user/list': function(req, res) {
        res.json([{
            key: '1',
            name: 'Zhang San',
            age: 32,
            address: 'Shanghai',
            tags: ['Programmer', 'Handsome'],
        }, {
            key: '2',
            name: 'Li Si',
            age: 42,
            address: 'Beijing',
            tags: ['Idiot'],
        }, {
            key: '3',
            name: 'Wang Wu',
            age: 32,
            address: 'Hangzhou',
            tags: ['Gaofushuai', 'Rich'],
        }
    ]);
}
}