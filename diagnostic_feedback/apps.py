"""
Configuration for course_overviews Django app
"""
from django.apps import AppConfig


class DiagnosticFeedbackConfig(AppConfig):
    """
    Configuration class for course_overviews Django app
    """
    name = 'diagnostic_feedback'
    verbose_name = "Diagnostic Feedback"

    def ready(self):
        from .quiz import QuizBlock
        print("\n\n#### HERE Diagnostic #### \n\n")
