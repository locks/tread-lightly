import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';
export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://api-preview.netrunnerdb.com';
  namespace = 'api/v3/public';

  pathForType(type) {
    return underscore(super.pathForType(type));
  }
}
