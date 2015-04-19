'use strict';
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name blocitoffApp
 * @description
 * # blocitoffApp
 *
 * Main module of the application.
 */
var app = angular
  .module('blocitoffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider) {
    
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('completedTasks', {
        templateUrl: 'views/completedtasks.html',
        controller: 'CompletedtasksCtrl'
      });
  });

  app.constant('FIREBASE_URI', 'https://popping-inferno-5377.firebaseio.com/');
