'use strict';
/** @jsx element */

import element from 'magic-virtual-element';

export let Grid = {
  render: function ({ props }) {
    return (<div class={['pure-g', propsClasses(props)]}>{props.children}</div>);
  }
};

export let Cell = {
  render: function ({ props }) {
    var classes = [];

    if (props.size) {
      classes.push('pure-u-' + props.size);
    }
    if (props.smSize) {
      classes.push('pure-u-small-' + props.smSize);
    }
    if (props.mdSize) {
      classes.push('pure-u-medium-' + props.mdSize);
    }
    if (props.lgSize) {
      classes.push('pure-u-large-' + props.lgSize);
    }
    if (props.xlgSize) {
      classes.push('pure-u-x-large-' + props.xlgSize);
    }

    return (<div class={[classes, propsClasses(props)]}>{props.children}</div>);
  }
};

function propsClasses (props) {
  return (props.class || '').split(' ');
}
