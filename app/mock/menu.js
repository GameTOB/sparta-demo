angular.module('framework')

.run(["ApiMock", function (ApiMock) {

    var createMenuNode = function(id, title, url, children) {
        var node = {
            id: id,
            title: title,
            url: url
        };
        if (children && children.length > 0) {
            node.children = children;
        };
        return node;
    };

    ApiMock.reg('/menu/get', [createMenuNode(1000, "表单例子", "", [
        createMenuNode(1001, "ngModel", "/form/ngModel"),
        createMenuNode(1002, "validate", "/form/validate"),
        createMenuNode(1003, "upload", "/form/upload")
        ])]
    );

    // ApiMock.reg('/menu/get', [
    //     createMenuNode(1000, "说明", "/readme"),
    
    // ]);

}]);
