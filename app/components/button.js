import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ButtonComponent extends Component {
  @service('calculator-input') calculator_input;

  @action
  actionF(value) {
    this.calculator_input.add(value);
  }
}
