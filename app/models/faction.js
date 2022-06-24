import Model, { attr, belongsTo } from '@ember-data/model';

export default class FactionModel extends Model {
  @attr name;
  @attr description;
  @attr is_mini;

  @belongsTo side;
}
