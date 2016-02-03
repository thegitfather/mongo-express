(function($) {
  'use strict';

  $.fn.wrapRegExp = function(options) {
    // defaults
    var settings = $.extend({
      regExp: /([\s\S]*)/,
      wrapper: '<div style="border:1px solid red;" />'
    }, options);

    return this.each(function(index, _this) {
      var $this = $(_this);
      var content = $this.html();
      var $newContent;

      if (settings.regExp.test(content)) {
        content = content.replace(settings.regExp, function(match) {
          $newContent = $(settings.wrapper);
          $newContent.append(match);
          // return it as string
          return $newContent.prop('outerHTML');
        });
        $this[0].innerHTML = content;
        return $this;
      }
    });
  };

})(jQuery);
