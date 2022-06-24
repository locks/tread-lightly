import Model, { attr, hasMany } from '@ember-data/model';

export default class CardCycleModel extends Model {
  @attr name;
  @attr('date') dateRelease;

  @hasMany cardSets;

  get cardCount() {
    return this.cardSets.reduce((sum, set) => sum + set.size, 0);
  }
}
