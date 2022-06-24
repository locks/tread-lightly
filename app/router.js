import EmberRouter from '@ember/routing/router';
import config from 'tread-lightly/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cards');
  this.route('sets');
  this.route('cycle', { path: 'cycle/:cycle_id' });
});
