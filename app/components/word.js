import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class WordComponent extends Component {
  @service data;
  @tracked word = '';
  // @tracked word1;
  // @tracked result;

  @action update(e) {
    this.word = e.target.value;
  }

  @action search(e) {
    e.preventDefault();
    this.data.add(this.word);
    this.word = '';
  }

    // @action async search(e) {
    //   this.result = [];
    //   let one = {};
    //   e.preventDefault();
    //   let response = await fetch(
    //     'https://api.dictionaryapi.dev/api/v2/entries/en/' + this.word
    //   );
    //   let result = await response.json();
    //   this.word = '';
    //   result.forEach((el) => {
    //     this.word1 = el.word;
    //     el.meanings.forEach((element) => {
    //       one.speech = element.partOfSpeech;
    //       element.definitions.forEach((ele) => {
    //         one.definition = ele.definition;
    //         one.example = ele.example;
    //       });
    //       this.result.pushObject(one);
    //       one = {};
    //     });
    //   });
    // }
}
