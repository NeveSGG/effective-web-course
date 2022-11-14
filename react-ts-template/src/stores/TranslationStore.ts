import { observable, action, makeObservable } from 'mobx';

class TranslationStore {
  language: string;

  constructor(lan: string) {
    this.language = lan;
    makeObservable(this, {
      changeLanguage: action,
      language: observable
    });
  }

  changeLanguage(newLanguage: string) {
    this.language = newLanguage;
  }
}

const translationStore = new TranslationStore('en-US');
export default translationStore;
