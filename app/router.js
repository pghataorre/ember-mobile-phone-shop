import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mobile-phone-shop');
  this.route('mobile-phone-shop', {path: 'mobile-phone-shop/:id'});
});

export default Router;
