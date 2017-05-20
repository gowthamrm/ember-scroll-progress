import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-scroll-progress', 'Integration | Component | ember scroll progress', {
  integration: true
});

test('Rendering Progress bar with default and custom style properties', function(assert) {
  assert.expect(5);

  // Template block usage:
  this.render(hbs`
    {{#ember-scroll-progress}}
      A simple Ember Addon
    {{/ember-scroll-progress}}
  `);

  assert.equal(this.$().text().trim(), 'A simple Ember Addon', 'Component Renders successfully.');

  // Default Value
  assert.equal(this.$('#progress-bar').css('height'), '3px', 'Progress bar renders with the default height');
  assert.equal(this.$('#progress-bar').css('background-color'), 'rgb(0, 0, 0)', 'Progress bar renders with the default color');

  // Set custom values for progress bar
  this.setProperties({
    color: 'rgb(255, 0, 0)',
    height: '5px'
  });
  this.render(hbs`
    {{#ember-scroll-progress color=color height=height}}
      A simple Ember Addon
    {{/ember-scroll-progress}}
  `);

  assert.equal(this.$('#progress-bar').css('height'), '5px', 'Progress bar renders with the given height');
  assert.equal(this.$('#progress-bar').css('background-color'), 'rgb(255, 0, 0)', 'Progress bar renders with the given color');
});
