import pkg_resources
from __future__ import absolute_import

from django import utils
from xblockutils.resources import ResourceLoader

from .config import student_assets, studio_assets

loader = ResourceLoader(__name__)


class XBlockWithTranslationServiceMixin(object):
    """
    Mixin providing access to i18n service
    """
    def _(self, text):
        """ Translate text """
        # noinspection PyUnresolvedReferences
        return self.runtime.service(self, "i18n").ugettext(text)


class ResourceMixin(object):
    """
        contain method to load css/js/htmll resource for student and studio view
    """

    def sort_resources_by_order(self, lst):
        return sorted(lst, key=lambda x: x[1])

    @staticmethod
    def resource_string(path):
        """Handy helper for getting resources."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def get_translation_content(self):
        """
        Returns JS content containing translations for user's language.
        """
        try:
            return self.resource_string('public/js/translations/{lang}/textjs.js'.format(
                lang=utils.translation.to_locale(utils.translation.get_language()),
            ))
        except IOError:
            return self.resource_string('public/js/translations/en/textjs.js')

    @property
    def i18n_service(self):
        """ Obtains translation service """
        return self.runtime.service(self, "i18n")

    def add_templates(self, fragment, context, view):
        # add templates in html fragment for studio/student view

        templates = self.sort_resources_by_order(student_assets.get('templates', [])
                                                 if view == 'student' else studio_assets.get('templates', [])
                                                 )
        for template_obj in templates:
            template = template_obj[0]
            fragment.add_content(loader.render_django_template(template, context, i18n_service=self.i18n_service))

        fragment.add_javascript(self.get_translation_content())

    def add_css(self, fragment, view):
        # add css in fragment for studio/student view

        css_resources = self.sort_resources_by_order(student_assets.get('css', [])
                                                     if view == 'student' else studio_assets.get('css', [])
                                                     )
        for css_obj in css_resources:
            css = css_obj[0]
            if css.startswith('http'):
                fragment.add_css_url(css)
            else:
                fragment.add_css_url(self.runtime.local_resource_url(self, css))

    def add_js(self, fragment, view):
        # add css in fragment for studio/student view

        js_resources = self.sort_resources_by_order(student_assets.get('js', [])
                                                    if view == 'student' else studio_assets.get('js', [])
                                                    )
        for js_obj in js_resources:
            js = js_obj[0]
            if js.startswith('http'):
                fragment.add_javascript_url(js)
            else:
                fragment.add_javascript_url(self.runtime.local_resource_url(self, js))

    def initialize_js_classes(self, fragment, view, json_args):
        # initialize js

        js_classes = self.sort_resources_by_order(student_assets.get('js_classes', [])
                                                  if view == 'student' else studio_assets.get('js_classes', [])
                                                  )
        for _class_obj in js_classes:
            _class = _class_obj[0]
            fragment.initialize_js(_class, json_args)
