import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'

export default class WordComponent extends Component {
    @tracked word="";
    @tracked word1;
    @tracked result;

    @action update(e){
        this.word = e.target.value;
    }

    @action async search(e){
        this.result = [];
        let one = {};
        e.preventDefault();
        let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + this.word);
        let result = await response.json();
        this.word = "";
        result.forEach(el => {
            this.word1=el.word;
            el.meanings.forEach(element => {
                one.speech = element.partOfSpeech;
                element.definitions.forEach(ele => {
                    one.definition = ele.definition;
                    one.example = ele.example;
                });
                this.result.push(one);
                one = {};
            });
        });
        console.log(this.word1);
        console.log(this.result);
    }
}
