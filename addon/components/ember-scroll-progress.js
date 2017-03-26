import Ember from 'ember';
import layout from '../templates/components/ember-scroll-progress';

const { Component, run } = Ember;

export default Component.extend({
  layout,
  canShowScrollProgress: false,

  didInsertElement() {
    this._super(...arguments);

    run.schedule('afterRender', () => {
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
      let progressBar = this.$('#progress-bar');
      this.set('canShowScrollProgress', true);

      // Setting the progress bar width in percentage
      progressBar.css({
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

    let scrollTop = this.$(window).scrollTop();
    let maxScroll = contentHeight - windowHeight;

    let scrollWidth = (scrollTop / maxScroll) * 100;

    //return the progress width in %
    return `${scrollWidth}%`;
  }

});
