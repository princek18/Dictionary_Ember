import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DataService extends Service {
    @tracked result = [];
    @tracked word1 = "";

    async add(word) {
        this.result = [];
        let one = {};
        this.word1 = word;
        let response = await fetch(
          'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
        );
        let result = await response.json();
        result.forEach((el) => {
          this.word1 = el.word;
          el.meanings.forEach((element) => {
            one.speech = element.partOfSpeech;
            for (let i = 0; i < element.definitions.length; i++) {
              one.definition = element.definitions[i].definition;
              one.example = element.definitions[i].example;
              break;
            };
            this.result.pushObject(one);
            one = {};
          });
        });
      }
}
