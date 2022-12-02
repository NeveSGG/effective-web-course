import { observable, action, makeObservable } from 'mobx';

interface CardDataObject {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

type CardData = Array<CardDataObject>;

class FavouritesStore {
  storage: Array<CardDataObject>;

  constructor() {
    const onLoadStorage: Array<CardDataObject> = JSON.parse(
      localStorage.getItem('favourites') || '[]'
    );
    this.storage = onLoadStorage;
    makeObservable(this, {
      updateStorage: action,
      storage: observable
    });
  }

  updateStorage(newData: Array<CardDataObject>) {
    const stringifiedData = JSON.stringify(newData);
    localStorage.setItem('favourites', stringifiedData);
    this.storage = newData;
  }

  checkIsFavourite(id: number) {
    return this.storage.some((el) => el.id === id);
  }
}

const favouritesStore = new FavouritesStore();
export default favouritesStore;
