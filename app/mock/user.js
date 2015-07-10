angular.module('framework')

.run(["ApiMock", function (ApiMock) {

      ApiMock.reg('/user/get',
        {
            id: "20002",
            nickname: "周曜",
            email: "zhouyao@360.cn",
            status: "1"
        });

}]);
