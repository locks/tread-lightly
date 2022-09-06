import Model, { attr, hasMany } from '@ember-data/model';

export default class SideModel extends Model {
  @attr name;

  @hasMany factions;
}
