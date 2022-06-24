import Model, { attr, belongsTo } from '@ember-data/model';

export default class CardTypeModel extends Model {
  @attr name;
  @belongsTo side;
}
