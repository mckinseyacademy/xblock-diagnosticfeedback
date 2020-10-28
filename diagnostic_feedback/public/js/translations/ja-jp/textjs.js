

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "\u3053\u306e\u30ab\u30c6\u30b4\u30ea\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", 
    "Are you sure to delete this choice?": "\u3053\u306e\u9078\u629e\u80a2\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", 
    "Are you sure to delete this question?": "\u3053\u306e\u8cea\u554f\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", 
    "Are you sure to delete this range?": "\u3053\u306e\u7bc4\u56f2\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f", 
    "At least one answer is required": "\u5c11\u306a\u304f\u3068\u3082\u56de\u7b54\u304c1\u3064\u5fc5\u8981\u3067\u3059", 
    "At least one category is required": "\u5c11\u306a\u304f\u3068\u3082\u30ab\u30c6\u30b4\u30ea\u304c1\u3064\u5fc5\u8981\u3067\u3059", 
    "At least one question is required": "\u5c11\u306a\u304f\u3068\u3082\u8cea\u554f\u304c1\u3064\u5fc5\u8981\u3067\u3059", 
    "At least one range is required": "\u5c11\u306a\u304f\u3068\u3082\u7bc4\u56f2\u304c1\u3064\u5fc5\u8981\u3067\u3059", 
    "Cancel": "\u30ad\u30e3\u30f3\u30bb\u30eb", 
    "Close": "\u7d42\u4e86", 
    "Current Step": "\u73fe\u5728\u306e\u30b9\u30c6\u30c3\u30d7", 
    "Finish": "\u7d42\u4e86", 
    "Heading 1": "\u898b\u51fa\u30571", 
    "Heading 2": "\u898b\u51fa\u30572", 
    "Heading 3": "\u898b\u51fa\u30573", 
    "However, some answer combinations in \"": "\u305f\u3060\u3057\u3001\"\u306e\u3044\u304f\u3064\u304b\u306e\u56de\u7b54\u306e\u7d44\u307f\u5408\u308f\u305b", 
    "Loading ...": "\u8aad\u307f\u8fbc\u307f\u4e2d...", 
    "Min value must be < Max": "\u6700\u5c0f\u5024\u306f\u6700\u5927\u5024\u3088\u308a\u3082\u5c0f\u3055\u3044\u5024\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059", 
    "Next": "\u6b21", 
    "Overlapping ranges found in \"": "\"\u306b\u91cd\u8907\u7bc4\u56f2\u304c\u898b\u3064\u304b\u308a\u307e\u3057\u305f", 
    "Paragraph": "\u6bb5\u843d", 
    "Preformatted": "\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6e08", 
    "Previous": "\u524d", 
    "Range Max value must be float": "\u7bc4\u56f2\u6700\u5927\u5024\u306f\u6d6e\u52d5\u5c0f\u6570\u70b9\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059", 
    "Range Min value must be float": "\u7bc4\u56f2\u6700\u5c0f\u5024\u306f\u6d6e\u52d5\u5c0f\u6570\u70b9\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059", 
    "Report is successfully generated. Downloading\u2026": "\u30ec\u30dd\u30fc\u30c8\u304c\u6b63\u5e38\u306b\u4f5c\u6210\u3055\u308c\u307e\u3057\u305f\u3002\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u4e2d\u3067\u3059...", 
    "Save": "\u4fdd\u5b58\u3059\u308b", 
    "Start Over": "\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3059", 
    "The report is currently being generated\u2026": "\u73fe\u5728\u30ec\u30dd\u30fc\u30c8\u3092\u4f5c\u6210\u4e2d\u3067\u3059\u2026", 
    "Unable to generate report. Please contact your system administrator.": "\u30ec\u30dd\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002\u30b7\u30b9\u30c6\u30e0\u7ba1\u7406\u8005\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002", 
    "Untitled": "\u4ef6\u540d\u306a\u3057", 
    "Your data has been successfully saved.": "\u30c7\u30fc\u30bf\u304c\u6b63\u5e38\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "n\u6708j\u65e5", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "Y/m/d G:i", 
    "SHORT_DATE_FORMAT": "Y/m/d", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

