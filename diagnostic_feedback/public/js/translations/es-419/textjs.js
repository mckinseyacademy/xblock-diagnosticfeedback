

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Are you sure to delete this category?": "\u00bfEst\u00e1 seguro de que desea eliminar esta categor\u00eda?", 
    "Are you sure to delete this choice?": "\u00bfEst\u00e1 seguro de que desea eliminar esta opci\u00f3n?", 
    "Are you sure to delete this question?": "\u00bfEst\u00e1 seguro de que desea eliminar esta pregunta?", 
    "Are you sure to delete this range?": "\u00bfEst\u00e1 seguro de que desea eliminar este rango?", 
    "At least one answer is required": "Se debe incluir al menos una respuesta", 
    "At least one category is required": "Se debe incluir al menos una categor\u00eda", 
    "At least one question is required": "Se debe incluir al menos una pregunta", 
    "At least one range is required": "Se debe incluir al menos un rango", 
    "Cancel": "Cancelar", 
    "Close": "Cerrar", 
    "Current Step": "Paso actual", 
    "Finish": "Finalizar", 
    "Heading 1": "Encabezado\u00a01", 
    "Heading 2": "Encabezado\u00a02", 
    "Heading 3": "Encabezado\u00a03", 
    "However, some answer combinations in \"": "Sin embargo, algunas combinaciones de respuesta en \"", 
    "Loading ...": "Cargando...", 
    "Min value must be < Max": "El valor m\u00edn. para el rango debe ser inferior al valor m\u00e1x.", 
    "Next": "Siguiente", 
    "Overlapping ranges found in \"": "Se encontr\u00f3 una superposici\u00f3n de rangos en \"", 
    "Paragraph": "P\u00e1rrafo", 
    "Preformatted": "Con formato previo", 
    "Previous": "Anterior", 
    "Range Max value must be float": "El valor m\u00e1x. para el rango debe ser flotante", 
    "Range Min value must be float": "El valor m\u00edn. para el rango debe ser flotante", 
    "Report is successfully generated. Downloading\u2026": "El informe se gener\u00f3 con \u00e9xito. Descargando...", 
    "Save": "Guardar", 
    "Start Over": "Volver a empezar", 
    "The report is currently being generated\u2026": "El informe se est\u00e1 generando...", 
    "Unable to generate report. Please contact your system administrator.": "No se pudo generar el informe. P\u00f3ngase en contacto con el administrador del sistema.", 
    "Untitled": "Sin t\u00edtulo", 
    "Your data has been successfully saved.": "Sus datos se guardaron con \u00e9xito."
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
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
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
    "FIRST_DAY_OF_WEEK": "1", 
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

