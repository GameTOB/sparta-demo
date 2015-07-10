angular.module('framework')

.run(function (ApiMock) {

      ApiMock.reg('/user/get',
        {
            id: "20002",
            nickname: "周曜",
            email: "zhouyao@360.cn",
            status: "1"
        });

});
