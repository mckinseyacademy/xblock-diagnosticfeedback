
            (function(global){
                var DiagnosticFeedbackXBlockI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "Voulez-vous vraiment supprimer cette cat\u00e9gorie ?", 
    "Are you sure to delete this choice?": "Voulez-vous vraiment supprimer ce choix ?", 
    "Are you sure to delete this question?": "Voulez-vous vraiment supprimer cette question ?", 
    "Are you sure to delete this range?": "Voulez-vous vraiment supprimer cet intervalle ?", 
    "At least one answer is required": "Il faut au moins une r\u00e9ponse", 
    "At least one category is required": "Il faut au moins une cat\u00e9gorie", 
    "At least one question is required": "Il faut au moins une question", 
    "At least one range is required": "Il faut au moins un intervalle", 
    "Cancel": "Annuler", 
    "Close": "Fermer", 
    "Current Step": "\u00c9tape actuelle", 
    "Finish": "Terminer", 
    "Heading 1": "Rubrique 1", 
    "Heading 2": "Rubrique 2", 
    "Heading 3": "Rubrique 3", 
    "However, some answer combinations in \"": "Toutefois, certaines combinaisons de r\u00e9ponses dans \"", 
    "Loading ...": "Chargement...", 
    "Min value must be < Max": "Valeur minimale doit \u00eatre < valeur maximale", 
    "Next": "Suivant", 
    "Overlapping ranges found in \"": "Intervalles de chevauchement trouv\u00e9s dans \"", 
    "Paragraph": "Paragraphe", 
    "Preformatted": "Pr\u00e9format\u00e9", 
    "Previous": "Pr\u00e9c\u00e9dent", 
    "Range Max value must be float": "La valeur maximale de l'intervalle doit \u00eatre flottante", 
    "Range Min value must be float": "La valeur minimale de l'intervalle doit \u00eatre flottante", 
    "Report is successfully generated. Downloading\u2026": "Le rapport est g\u00e9n\u00e9r\u00e9 avec succ\u00e8s. T\u00e9l\u00e9chargement...", 
    "Save": "Enregistrer", 
    "Start Over": "Recommencer", 
    "The report is currently being generated\u2026": "Le rapport est en cours de production...", 
    "Unable to generate report. Please contact your system administrator.": "Impossible de g\u00e9n\u00e9rer le rapport. Veuillez contacter votre administrateur de syst\u00e8me.", 
    "Untitled": "Sans titre", 
    "Your data has been successfully saved.": "Vos donn\u00e9es ont \u00e9t\u00e9 sauvegard\u00e9es avec succ\u00e8s."
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
    "DATETIME_FORMAT": "j F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j N Y H:i", 
    "SHORT_DATE_FORMAT": "j N Y", 
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


                  }
                };
                DiagnosticFeedbackXBlockI18N.init();
                global.DiagnosticFeedbackXBlockI18N = DiagnosticFeedbackXBlockI18N;
            }(this));
        