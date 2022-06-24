import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { underscore } from '@ember/string';
export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3000';
  namespace = 'api/v3/public';

  pathForType(type) {
    return underscore(super.pathForType(type));
  }
}
