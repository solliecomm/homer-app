import template from './templates/app-preferences-advanced.template.html';
import controller from './controllers/app-preferences-advanced.controller';

const appPreferencesAdvanced = {
  controller,
  template,
  bindings: {
    globasettings: '<',
  },
};

export default appPreferencesAdvanced;
