import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { hash } from 'rsvp';

export default class DeckNewSideRoute extends Route {
  @service store;

  async model({ side }) {
    let formats = this.store.findAll('format');
    let api_side = await this.store.findRecord('side', side, {
      include: 'factions',
    });
    let factions = api_side.get('factions').toArray();

    let side_identity = await this.store.findRecord(
      'card_type',
      `${side}_identity`,
      {
        include: ['cards', 'cards.faction'],
      }
    );
    let cards = side_identity.get('cards').toArray();

    return hash({
      side,
      formats,
      factions,
      cards,
    });
  }
}
