import EmberRouter from '@ember/routing/router';
import config from 'experiment/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/');
  this.route('story');
  this.route('about');
  this.route('start');
});
