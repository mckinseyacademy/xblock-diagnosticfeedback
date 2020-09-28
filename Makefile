WORKING_DIR := diagnostic_feedback
JS_TARGET := $(WORKING_DIR)/public/js/translations
EXTRACT_DIR := $(WORKING_DIR)/translations/en/LC_MESSAGES
EXTRACTED_DJANGO := $(EXTRACT_DIR)/django-partial.po
EXTRACTED_DJANGOJS := $(EXTRACT_DIR)/djangojs-partial.po
EXTRACTED_TEXT := $(EXTRACT_DIR)/text.po
EXTRACTED_TEXTJS := $(EXTRACT_DIR)/textjs.po

quality: ## check coding style with pycodestyle and pylint
	pycodestyle diagnostic_feedback --max-line-length=120
	pylint diagnostic_feedback --disable=all --enable=function-redefined,undefined-variable,unused-variable

test: ## run tests in the current virtualenv
	mkdir -p var  # for var/workbench.log
	python run_tests.py --with-coverage --cover-package=diagnostic_feedback

requirements: ## install development environment requirements
	pip install -r requirements.txt --exists-action w
	pip install -r requirements-dev.txt --exists-action w
	cd $(VIRTUAL_ENV)/src/xblock-sdk && \
		pip install -r requirements/base.txt && \
		pip install -r requirements/test.txt
	pip install -e .

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

detect_changed_source_translations: ## Determines if the source translation files are up-to-date, otherwise exit with a non-zero code.
	i18n_tool changed

dummy_translations: ## generate dummy translation (.po) files
	i18n_tool dummy

build_dummy_translations: extract_translations dummy_translations compile_translations ## generate and compile dummy translation files

validate_translations: build_dummy_translations detect_changed_source_translations ## validate translations

.PHONY: requirements test-requirements dev-requirements
