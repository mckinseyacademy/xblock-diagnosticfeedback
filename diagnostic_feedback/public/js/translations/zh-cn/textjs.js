

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "\u662f\u5426\u786e\u5b9a\u5220\u9664\u6b64\u7c7b\u522b\uff1f", 
    "Are you sure to delete this choice?": "\u662f\u5426\u786e\u5b9a\u5220\u9664\u6b64\u9009\u9879\uff1f", 
    "Are you sure to delete this question?": "\u662f\u5426\u786e\u5b9a\u5220\u9664\u6b64\u95ee\u9898\uff1f", 
    "Are you sure to delete this range?": "\u662f\u5426\u786e\u5b9a\u5220\u9664\u6b64\u8303\u56f4\uff1f", 
    "At least one answer is required": "\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u7b54\u6848", 
    "At least one category is required": "\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u7c7b\u522b", 
    "At least one question is required": "\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u95ee\u9898", 
    "At least one range is required": "\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u8303\u56f4", 
    "Cancel": "\u53d6\u6d88", 
    "Close": "\u5173\u95ed", 
    "Current Step": "\u5f53\u524d\u6b65\u9aa4", 
    "Finish": "\u5b8c\u6210", 
    "Heading 1": "\u6807\u9898 1", 
    "Heading 2": "\u6807\u9898 2", 
    "Heading 3": "\u6807\u9898 3", 
    "However, some answer combinations in \"": "\u4f46\u662f\uff0c\u4ee5\u4e0b\u5176\u4e2d\u7684\u4e00\u4e9b\u7b54\u6848\u7ec4\u5408", 
    "Loading ...": "\u6b63\u5728\u52a0\u8f7d...", 
    "Min value must be < Max": "\u6700\u5c0f\u503c\u5fc5\u987b\u5c0f\u4e8e\u6700\u5927\u503c", 
    "Next": "\u4e0b\u4e00\u6b65", 
    "Overlapping ranges found in \"": "\u4ee5\u4e0b\u9879\u4e2d\u5b58\u5728\u91cd\u53e0\u8303\u56f4", 
    "Paragraph": "\u6bb5\u843d", 
    "Preformatted": "\u5df2\u9884\u683c\u5f0f\u5316", 
    "Previous": "\u4e0a\u4e00\u6b65", 
    "Range Max value must be float": "\u8303\u56f4\u6700\u5927\u503c\u5fc5\u987b\u662f\u6d6e\u52a8\u7684", 
    "Range Min value must be float": "\u8303\u56f4\u6700\u5c0f\u503c\u5fc5\u987b\u662f\u6d6e\u52a8\u7684", 
    "Report is successfully generated. Downloading\u2026": "\u62a5\u544a\u5df2\u6210\u529f\u751f\u6210\u3002\u6b63\u5728\u4e0b\u8f7d...", 
    "Save": "\u4fdd\u5b58", 
    "Start Over": "\u91cd\u65b0\u5f00\u59cb", 
    "The report is currently being generated\u2026": "\u76ee\u524d\u6b63\u5728\u751f\u6210\u62a5\u544a\u2026", 
    "Unable to generate report. Please contact your system administrator.": "\u65e0\u6cd5\u751f\u6210\u62a5\u544a\u3002\u8bf7\u8054\u7cfb\u7cfb\u7edf\u7ba1\u7406\u5458\u3002", 
    "Untitled": "\u65e0\u6807\u9898", 
    "Your data has been successfully saved.": "\u60a8\u7684\u6570\u636e\u5df2\u6210\u529f\u4fdd\u5b58\u3002"
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
    "DATETIME_FORMAT": "N j, Y, P", 
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
    "DATE_FORMAT": "N j, Y", 
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
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
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

