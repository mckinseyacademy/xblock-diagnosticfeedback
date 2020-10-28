

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "Sind Sie sicher, dass Sie diese Kategorie l\u00f6schen wollen?", 
    "Are you sure to delete this choice?": "Sind Sie sicher, dass Sie diese Auswahl l\u00f6schen wollen?", 
    "Are you sure to delete this question?": "Sind Sie sicher, dass Sie diese Frage l\u00f6schen wollen?", 
    "Are you sure to delete this range?": "Sind Sie sicher, dass Sie diesen Bereich l\u00f6schen wollen?", 
    "At least one answer is required": "Mindestens eine Antwort ist erforderlich", 
    "At least one category is required": "Mindestens eine Kategorie ist erforderlich", 
    "At least one question is required": "Mindestens eine Frage ist erforderlich", 
    "At least one range is required": "Mindestens ein Bereich ist erforderlich", 
    "Cancel": "Abbrechen", 
    "Close": "Schlie\u00dfen", 
    "Current Step": "Derzeitiger Schritt", 
    "Finish": "Ende", 
    "Heading 1": "\u00dcberschrift 1", 
    "Heading 2": "\u00dcberschrift 2", 
    "Heading 3": "\u00dcberschrift 3", 
    "However, some answer combinations in \"": "Jedoch einige Antwortkombinationen in \"", 
    "Loading ...": "L\u00e4dt...", 
    "Min value must be < Max": "Mindestwert muss < H\u00f6chstwert sein", 
    "Next": "Weiter", 
    "Overlapping ranges found in \"": "\u00dcberlappende Bereiche gefunden in \"", 
    "Paragraph": "Absatz", 
    "Preformatted": "Vorformatiert", 
    "Previous": "Zur\u00fcck", 
    "Range Max value must be float": "H\u00f6chstwert des Bereichs muss schweben", 
    "Range Min value must be float": "Mindestwert des Bereichs muss schweben", 
    "Report is successfully generated. Downloading\u2026": "Der Report wurde erfolgreich zusammengestellt. L\u00e4dt herunter...", 
    "Save": "Speichern", 
    "Start Over": "Noch einmal von vorne anfangen", 
    "The report is currently being generated\u2026": "Der Report wird gerade zusammengestellt\u2026", 
    "Unable to generate report. Please contact your system administrator.": "Report kann nicht zusammengestellt werden. Bitte wenden Sie sich an Ihren Systemadministrator.", 
    "Untitled": "Ohne Titel", 
    "Your data has been successfully saved.": "Ihre Daten wurden erfolgreich gespeichert."
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
    "DATETIME_FORMAT": "j. F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
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

