import Model, { attr, belongsTo } from '@ember-data/model';

export default class FactionModel extends Model {
  @attr name;
  @attr description;
  @attr('boolean') isMini;

  @belongsTo side;
}
