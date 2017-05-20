import Ember from 'ember';
import layout from '../templates/components/ember-scroll-progress';

const { Component, run } = Ember;

export default Component.extend({
  layout,
  reduceOffsetTopBy: 0,

  initProgressBar() {
    let $progressBar = this.$('#progress-bar');
    let height = this.get('height') || 3;
    let color = this.get('color') || '#000';

    $progressBar.css({
      height,
      'background-color': color
    });
  },

  didInsertElement() {
    this._super(...arguments);

    run.schedule('afterRender', () => {
      this.initProgressBar();
      this.bindEvents();
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    this.unbindEvents();
  },

  /**
   * Binds scroll events to function
   */
  bindEvents() {
    this.$(window).on('scroll', () => {
      let $progressBar = this.$('#progress-bar');

      // Setting the progress bar width in percentage
      $progressBar.css({
        width: this.getProgressWidth()
      });
    });
  },

  unbindEvents() {
    this.$(window).off('scroll');
  },

  getProgressWidth() {
    let content = this.$('#scroll-container');

    let contentHeight = content && content.height();
    let windowHeight = this.$(window).height();
    let reduceOffsetTopBy = this.get('reduceOffsetTopBy');

    let scrollTop = this.$(window).scrollTop();
    let maxScroll = contentHeight - windowHeight + reduceOffsetTopBy;

    let scrollWidth = (scrollTop / maxScroll) * 100;

    //return the progress width in %
    return `${scrollWidth}%`;
  }

});
