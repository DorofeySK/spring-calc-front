import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ButtonClearComponent extends Component {
  @service('calculator-input') calculator_input;

  @action
  clear(oper) {
    this.calculator_input.remove();
  }
}
