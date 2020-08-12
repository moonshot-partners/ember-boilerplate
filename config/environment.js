'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'ember-boilerplate',
    podModulePrefix: 'ember-boilerplate/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/, process.env.APP_HOST].filter((env) => env)
    },

    backendApiHost: process.env.BACKEND_API_HOST,

    historySupportMiddleware: true,

    debounce: {
      default: 500
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    ENV.backendApiHost = 'http://moonshot-example.com';

    ENV.debounce = {
      default: 0
    };
  }

  if (environment === 'production') {
    ENV.sentry = {
      dsn: process.env.APP_SENTRY_DSN,
      environment: process.env.APP_ENV,
      release: process.env.APP_RELEASE_VERSION
    };
  }

  return ENV;
};
