import Model, { attr, belongsTo } from '@ember-data/model';

export default class CardSetModel extends Model {
  @attr name;
  @attr size;
  @attr dateRelease;

  @belongsTo cardTypes;
}
