# ember-scroll-progress


[![npm version](https://badge.fury.io/js/ember-scroll-progress.svg)](https://badge.fury.io/js/ember-scroll-progress)
[![Build Status](https://travis-ci.org/gowthamrm/ember-scroll-progress.svg?branch=master)](https://travis-ci.org/gowthamrm/ember-scroll-progress)

A simple ember addon component for displaying an amount a page is scrolled via a progress bar.
Scroll the page to view this page's progress on top.

[DEMO](https://gowthamrm.github.io/ember-scroll-progress/)

## Usage

```handlebars

  {{#ember-scroll-progress
    height=5
    color="red"
    reduceOffsetTopBy=85
  }}
    <!-- page content -->
  {{/ember-scroll-progress}}

```

## Parameters

* `height` to customize the the height of the progress bar.
* `color` to provide a customizable color/color code for the progress bar.
* `reduceOffsetTopBy` to set the top offset based on the scroll container's top position inside the page.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-progress`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
