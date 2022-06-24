import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class CycleRoute extends Route {
  @service store;

  model({ cycle_id }) {
    return this.store.findRecord('card_cycle', cycle_id);
  }
}
