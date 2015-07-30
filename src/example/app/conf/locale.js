//重置日历短日期本地化文本
angular.module('app').run(function ($locale) {
    $locale["DATETIME_FORMATS"]["SHORTDAY"] = [
      "\u65e5",
      "\u4e00",
      "\u4e8c",
      "\u4e09",
      "\u56db",
      "\u4e94",
      "\u516d"
    ];
});