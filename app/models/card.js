import Model, { attr, belongsTo } from '@ember-data/model';

export default class CardModel extends Model {
  @attr title;
  @attr text;

  @belongsTo side;
  @belongsTo faction;
}
