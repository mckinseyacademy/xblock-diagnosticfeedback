

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "\uc774 \uce74\ud14c\uace0\ub9ac\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Are you sure to delete this choice?": "\uc774 \uc120\ud0dd\uc9c0\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Are you sure to delete this question?": "\uc774 \uc9c8\ubb38\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Are you sure to delete this range?": "\uc774 \ubc94\uc704\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "At least one answer is required": "\ud558\ub098 \uc774\uc0c1\uc758 \ub2f5\ubcc0\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.", 
    "At least one category is required": "\ud558\ub098 \uc774\uc0c1\uc758 \uce74\ud14c\uace0\ub9ac\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.", 
    "At least one question is required": "\ud558\ub098 \uc774\uc0c1\uc758 \uc9c8\ubb38\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.", 
    "At least one range is required": "\ud558\ub098 \uc774\uc0c1\uc758 \ubc94\uc704\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.", 
    "Cancel": "\ucde8\uc18c", 
    "Close": "\ub2eb\uae30", 
    "Current Step": "\ud604\uc7ac \ub2e8\uacc4", 
    "Finish": "\uc644\ub8cc", 
    "Heading 1": "\uc81c\ubaa9 1", 
    "Heading 2": "\uc81c\ubaa9 2", 
    "Heading 3": "\uc81c\ubaa9 3", 
    "However, some answer combinations in \"": "\uadf8\ub7ec\ub098, \ub2e4\uc74c\uc758 \uc77c\ubd80 \ub2f5\ubcc0 \uc870\ud569: \"", 
    "Loading ...": "\ub85c\ub4dc \uc911...", 
    "Min value must be < Max": "\ucd5c\uc18c\uac12\uc740 \ucd5c\ub300\uac12\ubcf4\ub2e4 \uc791\uc544\uc57c \ud569\ub2c8\ub2e4.", 
    "Next": "\ub2e4\uc74c", 
    "Overlapping ranges found in \"": "\ub2e4\uc74c\uc5d0\uc11c \uc911\ubcf5\ub418\ub294 \ubc94\uc704 \ubc1c\uacac: \"", 
    "Paragraph": "\ub2e8\ub77d", 
    "Preformatted": "\uc0ac\uc804 \uc9c0\uc815\ub41c \ud615\uc2dd", 
    "Previous": "\uc774\uc804", 
    "Range Max value must be float": "\ubc94\uc704 \ucd5c\ub300\uac12\uc740 \ubd80\ub3d9 \uc18c\uc218\uc810\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.", 
    "Range Min value must be float": "\ubc94\uc704 \ucd5c\uc18c\uac12\uc740 \ubd80\ub3d9 \uc18c\uc218\uc810\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.", 
    "Report is successfully generated. Downloading\u2026": "\ubcf4\uace0\uc11c\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc \uc911\u2026", 
    "Save": "\uc800\uc7a5", 
    "Start Over": "\ub2e4\uc2dc \uc2dc\uc791", 
    "The report is currently being generated\u2026": "\ud604\uc7ac \ubcf4\uace0\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \uc911...", 
    "Unable to generate report. Please contact your system administrator.": "\ubcf4\uace0\uc11c\ub97c \uc0dd\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2dc\uc2a4\ud15c \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud558\uc2ed\uc2dc\uc624.", 
    "Untitled": "\uc81c\ubaa9 \uc5c6\uc74c", 
    "Your data has been successfully saved.": "\ub370\uc774\ud130\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4."
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
    "DATETIME_FORMAT": "Y\ub144 n\uc6d4 j\uc77c g:i A", 
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
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84 %S\ucd08", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84"
    ], 
    "DATE_FORMAT": "Y\ub144 n\uc6d4 j\uc77c", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "n\uc6d4 j\uc77c", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-n-j H:i", 
    "SHORT_DATE_FORMAT": "Y-n-j.", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "A g:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M", 
      "%H\uc2dc %M\ubd84 %S\ucd08", 
      "%H\uc2dc %M\ubd84"
    ], 
    "YEAR_MONTH_FORMAT": "Y\ub144 n\uc6d4"
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

