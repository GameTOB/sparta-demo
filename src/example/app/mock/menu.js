angular.module('framework')

.run(function (ApiMock , APPCONF) {

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

    ApiMock.reg('/menu/get_tree', [createMenuNode(1000, "表单例子", "", [
        createMenuNode(1001, "ngModel", "/form/ngModel"),
        createMenuNode(1002, "validate", "/form/validate"),
        createMenuNode(1003, "upload", "/form/upload"),
        createMenuNode(1004, "datepicker", "/form/datepicker"),
        createMenuNode(1005, "select", "/form/select")
        ])]
    );

    // ApiMock.reg('/menu/get', [
    //     createMenuNode(1000, "说明", "/readme"),
    
    // ]);

});
