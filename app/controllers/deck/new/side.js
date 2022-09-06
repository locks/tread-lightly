import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class DeckNewSideController extends Controller {
  @service router;
  queryParams = [
    {
      selectedFaction: {
        as: 'faction',
      },
    },
  ];
  @tracked selectedFaction = null;
  @tracked selectedFormat = null;

  get filteredIdentities() {
    return this.model.cards.filter((card) => {
      if (
        this.selectedFaction &&
        this.selectedFaction !== card.faction.get('id')
      ) {
        return false;
      }
      return true;
    });
  }

  @action
  selectFaction(faction) {
    this.router.transitionTo({ queryParams: { faction: faction.id } });
  }

  @action
  resetFaction() {
    this.router.transitionTo({ queryParams: { faction: null } });
  }
}
