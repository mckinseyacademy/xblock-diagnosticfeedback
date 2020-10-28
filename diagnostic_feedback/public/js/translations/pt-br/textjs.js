

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "Tem certeza que deseja excluir essa categoria?", 
    "Are you sure to delete this choice?": "Tem certeza que deseja excluir essa reposta?", 
    "Are you sure to delete this question?": "Tem certeza que deseja excluir essa pergunta?", 
    "Are you sure to delete this range?": "Tem certeza que deseja excluir esse intervalo?", 
    "At least one answer is required": "\u00c9 necess\u00e1rio pelo menos uma reposta", 
    "At least one category is required": "\u00c9 necess\u00e1ria pelo menos uma categoria", 
    "At least one question is required": "\u00c9 necess\u00e1rio pelo menos uma pergunta", 
    "At least one range is required": "\u00c9 necess\u00e1rio pelo menos um intervalo", 
    "Cancel": "Cancelar", 
    "Close": "Fechar", 
    "Current Step": "Etapa atual", 
    "Finish": "Terminar", 
    "Heading 1": "Cabe\u00e7alho 1", 
    "Heading 2": "Cabe\u00e7alho 2", 
    "Heading 3": "Cabe\u00e7alho 3", 
    "However, some answer combinations in \"": "No entanto, algumas combina\u00e7\u00f5es de resposta em \"", 
    "Loading ...": "Carregando...", 
    "Min value must be < Max": "O valor m\u00ednimo deve ser menor do que o m\u00e1ximo", 
    "Next": "Pr\u00f3ximo", 
    "Overlapping ranges found in \"": "Intervalos sobrepostos encontrados em \"", 
    "Paragraph": "Par\u00e1grafo", 
    "Preformatted": "Pr\u00e9-formatado", 
    "Previous": "Anterior", 
    "Range Max value must be float": "O valor m\u00e1ximo do intervalo deve ser flutuante", 
    "Range Min value must be float": "O valor m\u00ednimo do intervalo deve ser flutuante", 
    "Report is successfully generated. Downloading\u2026": "O relat\u00f3rio foi gerado com sucesso. Fazendo o download\u2026", 
    "Save": "Salvar", 
    "Start Over": "Come\u00e7ar de novo", 
    "The report is currently being generated\u2026": "O relat\u00f3rio est\u00e1 sendo gerado...", 
    "Unable to generate report. Please contact your system administrator.": "N\u00e3o foi poss\u00edvel gerar o relat\u00f3rio. Entre em contato com o administrador do sistema.", 
    "Untitled": "Sem t\u00edtulo", 
    "Your data has been successfully saved.": "Seus dados foram salvos com sucesso."
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%d/%m/%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j \\d\\e F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
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

