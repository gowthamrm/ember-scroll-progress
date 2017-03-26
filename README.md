# ember-scroll-progress

A simple ember addon component for displaying an amount a page is scrolled via a progress bar.
Scroll the page to view this page's progress on top.

## Usage

```handlebars

  {{#ember-scroll-progress
    progressContainerClass="progress-container"
    progressBarClass="progress-bar"
  }}
    <!-- page content -->
  {{/ember-scroll-progress}}

```

## Parameters

* `progressContainerClass` will have the custom style elements for the progress bar container. This class can be used to position the progress bar.
* `progressBarClass` can be used to customize the progress bar.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-progress`
* `npm install`
* `bower install`

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
