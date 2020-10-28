

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "Czy na pewno chcesz usun\u0105\u0107 t\u0119 kategori\u0119?", 
    "Are you sure to delete this choice?": "Czy na pewno chcesz usun\u0105\u0107 ten wyb\u00f3r?", 
    "Are you sure to delete this question?": "Czy na pewno chcesz usun\u0105\u0107 to pytanie?", 
    "Are you sure to delete this range?": "Czy na pewno chcesz usun\u0105\u0107 ten zakres?", 
    "At least one answer is required": "Potrzeba przynajmniej 1 odpowiedzi", 
    "At least one category is required": "Potrzeba przynajmniej 1 kategorii", 
    "At least one question is required": "Potrzeba przynajmniej 1 pytania", 
    "At least one range is required": "Potrzeba przynajmniej 1 zakresu", 
    "Cancel": "Anuluj", 
    "Close": "Zamknij", 
    "Current Step": "Obecny krok", 
    "Finish": "Zako\u0144cz", 
    "Heading 1": "Nag\u0142\u00f3wek 1", 
    "Heading 2": "Nag\u0142\u00f3wek 2", 
    "Heading 3": "Nag\u0142\u00f3wek 3", 
    "However, some answer combinations in \"": "Jednak niekt\u00f3re kombinacje odpowiedzi w \u201e", 
    "Loading ...": "Wczytywanie...", 
    "Min value must be < Max": "Minimalna warto\u015b\u0107 musi by\u0107 mniejsza od maksymalnej warto\u015bci", 
    "Next": "Nast\u0119pny", 
    "Overlapping ranges found in \"": "Znaleziono nak\u0142adaj\u0105ce si\u0119 na siebie zakresy w \u201e", 
    "Paragraph": "Akapit", 
    "Preformatted": "Wst\u0119pnie sformatowane", 
    "Previous": "Poprzedni", 
    "Range Max value must be float": "Maksymalna warto\u015b\u0107 zakresu musi by\u0107 liczb\u0105 zmiennoprzecinkow\u0105", 
    "Range Min value must be float": "Minimalna warto\u015b\u0107 zakresu musi by\u0107 liczb\u0105 zmiennoprzecinkow\u0105", 
    "Report is successfully generated. Downloading\u2026": "Raport zosta\u0142 wygenerowany. Pobieranie raportu...", 
    "Save": "Zapisz", 
    "Start Over": "Zacznij od pocz\u0105tku", 
    "The report is currently being generated\u2026": "Generujemy raport...", 
    "Unable to generate report. Please contact your system administrator.": "Nie uda\u0142o si\u0119 wygenerowa\u0107 raportu. Prosimy skontaktowa\u0107 si\u0119 z administratorem systemu.", 
    "Untitled": "Bez tytu\u0142u", 
    "Your data has been successfully saved.": "Twoje dane zosta\u0142y zapisane."
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
    "DATETIME_FORMAT": "j E Y H:i", 
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
    "DATE_FORMAT": "j E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%y-%m-%d", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d-m-Y  H:i", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
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

