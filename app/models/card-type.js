import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CardTypeModel extends Model {
  @attr name;
  @belongsTo side;
  @hasMany({ async: false }) cards;
}
