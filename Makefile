WORKING_DIR := diagnostic_feedback
JS_TARGET := $(WORKING_DIR)/public/js/translations
EXTRACT_DIR := $(WORKING_DIR)/translations/en/LC_MESSAGES
EXTRACTED_DJANGO := $(EXTRACT_DIR)/django-partial.po
EXTRACTED_DJANGOJS := $(EXTRACT_DIR)/djangojs-partial.po
EXTRACTED_TEXT := $(EXTRACT_DIR)/text.po
EXTRACTED_TEXTJS := $(EXTRACT_DIR)/textjs.po

requirements:
	pip install -r requirements.txt
	pip install -e .

test-requirements:
	pip install -r test-requirements.txt

dev-requirements:
	pip install -r requirements-dev.txt

extract_translations: ## extract strings to be translated, outputting .po files
	cd $(WORKING_DIR) && i18n_tool extract
	mv $(EXTRACTED_DJANGO) $(EXTRACTED_TEXT)
	mv $(EXTRACTED_DJANGOJS) $(EXTRACTED_TEXTJS)
	rm -f $(EXTRACTED_DJANGO)
	rm -f $(EXTRACTED_DJANGOJS)
	find $(EXTRACT_DIR) -type f -name "*.po" -exec sed -i'' -e 's/nplurals=INTEGER/nplurals=2/' {} \;
	find $(EXTRACT_DIR) -type f -name "*.po" -exec sed -i'' -e 's/plural=EXPRESSION/plural=\(n != 1\)/' {} \;

compile_translations: ## compile translation files, outputting .mo files for each supported language
	cd $(WORKING_DIR) && i18n_tool generate
	python manage.py compilejsi18n --output $(JS_TARGET)

.PHONY: requirements test-requirements dev-requirements
