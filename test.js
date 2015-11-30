'use strict';
/** @jsx element */

import test from 'tape';
import { Grid, Cell } from './';
import { renderString, tree } from 'deku';
import element from 'magic-virtual-element';

test('Grid', function (t) {
  t.equal(
    renderString(tree(<Grid>content</Grid>)),
    '<div class="pure-g">content</div>');

  t.equal(
    renderString(tree(<Grid class='custom-class'>content</Grid>)),
    '<div class="pure-g custom-class">content</div>');
  t.end();
});

test('Cell', function (t) {
  t.equal(
    renderString(tree(<Cell size='1-1'>content</Cell>)),
    '<div class="pure-u-1-1">content</div>');

  t.equal(
    renderString(tree(<Cell size='1-1' smSize='1-2' mdSize='1-3' lgSize='1-4' xlgSize='1-5'>content</Cell>)),
    '<div class="pure-u-1-1 pure-u-small-1-2 pure-u-medium-1-3 pure-u-large-1-4 pure-u-x-large-1-5">content</div>');

  t.equal(
    renderString(tree(<Cell size='1-1' class='custom-class'>content</Cell>)),
    '<div class="pure-u-1-1 custom-class">content</div>');
  t.end();
});
