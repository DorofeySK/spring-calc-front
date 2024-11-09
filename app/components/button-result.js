import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ButtonResultComponent extends Component {
  @service('calculator-input') calculator_input;

  @action
  result(oper) {
    this.calculator_input.result();
  }
}
