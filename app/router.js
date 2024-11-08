import EmberRouter from '@ember/routing/router';
import config from 'spring-calc-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('calculator');
  this.route('welcome-page', { path: '/' });
});
