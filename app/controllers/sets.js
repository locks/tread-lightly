import Controller from '@ember/controller';

export default class SetsController extends Controller {
  /**
   * Sorts objects from newest to oldest
   * @param {*} model List of cycles
   * @returns Array
   */
  sortByDate(model) {
    return model
      .toArray()
      .sort(({ dateRelease: dateA }, { dateRelease: dateB }) => {
        return Number(dateB) - Number(dateA);
      });
  }

  formatDate(date) {
    return Intl.DateTimeFormat().format(date);
  }
}
