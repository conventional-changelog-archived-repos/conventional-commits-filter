'use strict';
var conventionalCommitsFilter = require('./');
var assert = require('assert');

it('should error if `commits` is not `array`', function () {
  assert.throws(function () {
    conventionalCommitsFilter();
  });
});

it('should filter reverted commits', function () {
  var commits = [{
    type: 'revert',
    scope: null,
    subject: 'feat(): amazing new module',
    header: 'revert: feat(): amazing new module\n',
    body: 'This reverts commit 56185b7356766d2b30cfa2406b257080272e0b7a.\n',
    footer: null,
    notes: [],
    references: [],
    revert: {
      header: 'feat(): amazing new module',
      hash: '56185b7356766d2b30cfa2406b257080272e0b7a',
      body: null
    },
    hash: '789d898b5f8422d7f65cc25135af2c1a95a125ac\n',
    raw: {
      type: 'revert',
      scope: null,
      subject: 'feat(): amazing new module',
      header: 'revert: feat(): amazing new module\n',
      body: 'This reverts commit 56185b7356766d2b30cfa2406b257080272e0b7a.\n',
      footer: null,
      notes: [],
      references: [],
      revert: {
        header: 'feat(): amazing new module',
        hash: '56185b7356766d2b30cfa2406b257080272e0b7a',
        body: null
      },
      hash: '789d898b5f8422d7f65cc25135af2c1a95a125ac\n'
    }
  }, {
    type: 'Features',
    scope: null,
    subject: 'wow',
    header: 'amazing new module\n',
    body: null,
    footer: 'BREAKING CHANGE: Not backward compatible.\n',
    notes: [],
    references: [],
    revert: null,
    hash: '56185b',
    raw: {
      type: 'feat',
      scope: null,
      subject: 'amazing new module',
      header: 'feat(): amazing new module\n',
      body: null,
      footer: 'BREAKING CHANGE: Not backward compatible.\n',
      notes: [],
      references: [],
      revert: null,
      hash: '56185b7356766d2b30cfa2406b257080272e0b7a\n'
    }
  }, {
    type: 'What',
    scope: null,
    subject: 'new feature',
    header: 'feat(): new feature\n',
    body: null,
    footer: null,
    notes: [],
    references: [],
    revert: null,
    hash: '815a3f0',
    raw: {
      type: 'feat',
      scope: null,
      subject: 'new feature',
      header: 'feat(): new feature\n',
      body: null,
      footer: null,
      notes: [],
      references: [],
      revert: null,
      hash: '815a3f0717bf1dfce007bd076420c609504edcf3\n'
    }
  }, {
    type: 'Chores',
    scope: null,
    subject: 'first commit',
    header: 'chore: first commit\n',
    body: null,
    footer: null,
    notes: [],
    references: [],
    revert: null,
    hash: '74a3e4d6d25',
    raw: {
      type: 'chore',
      scope: null,
      subject: 'first commit',
      header: 'chore: first commit\n',
      body: null,
      footer: null,
      notes: [],
      references: [],
      revert: null,
      hash: '74a3e4d6d25dee2c0d6483a0a3887417728cbe0a\n'
    }
  }];

  commits = conventionalCommitsFilter(commits);

  assert.equal(commits.length, 2);

  assert.deepEqual(commits, [{
    type: 'What',
    scope: null,
    subject: 'new feature',
    header: 'feat(): new feature\n',
    body: null,
    footer: null,
    notes: [],
    references: [],
    revert: null,
    hash: '815a3f0',
    raw: {
      type: 'feat',
      scope: null,
      subject: 'new feature',
      header: 'feat(): new feature\n',
      body: null,
      footer: null,
      notes: [],
      references: [],
      revert: null,
      hash: '815a3f0717bf1dfce007bd076420c609504edcf3\n'
    }
  }, {
    type: 'Chores',
    scope: null,
    subject: 'first commit',
    header: 'chore: first commit\n',
    body: null,
    footer: null,
    notes: [],
    references: [],
    revert: null,
    hash: '74a3e4d6d25',
    raw: {
      type: 'chore',
      scope: null,
      subject: 'first commit',
      header: 'chore: first commit\n',
      body: null,
      footer: null,
      notes: [],
      references: [],
      revert: null,
      hash: '74a3e4d6d25dee2c0d6483a0a3887417728cbe0a\n'
    }
  }]);
});
