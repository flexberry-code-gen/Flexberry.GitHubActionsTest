import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGitHubActionsTestNewClass1LForm from './forms/i-i-s-git-hub-actions-test-new-class1-l';
import IISGitHubActionsTestNewClass1EForm from './forms/i-i-s-git-hub-actions-test-new-class1-e';
import IISGitHubActionsTestNewClass1Model from './models/i-i-s-git-hub-actions-test-new-class1';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-git-hub-actions-test-new-class1': IISGitHubActionsTestNewClass1Model
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'git-hub-actions-test': {
          caption: 'git-hub-actions-test',
          title: 'git-hub-actions-test',
          'i-i-s-git-hub-actions-test-new-class1-l': {
            caption: 'i-i-s-git-hub-actions-test-new-class1-l',
            title: 'i-i-s-git-hub-actions-test-new-class1-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-git-hub-actions-test-new-class1-l': IISGitHubActionsTestNewClass1LForm,
    'i-i-s-git-hub-actions-test-new-class1-e': IISGitHubActionsTestNewClass1EForm
  },

});

export default translations;
