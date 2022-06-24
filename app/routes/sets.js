import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SetsRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('cardCycle', { include: 'card_sets' });
  }
}
