import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  a: DS.attr('string')
});

export let ValidationRules = {
  a: {
    descriptionKey: 'models.i-i-s-git-hub-actions-test-new-class1.validations.a.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass1E', 'i-i-s-git-hub-actions-test-new-class1', {
    a: attr('A', { index: 0 })
  });

  modelClass.defineProjection('NewClass1L', 'i-i-s-git-hub-actions-test-new-class1', {
    a: attr('A', { index: 0 })
  });
};
