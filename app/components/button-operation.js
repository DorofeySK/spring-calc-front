import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ButtonOperationComponent extends Component {
  @service('calculator-input') calculator_input;

  @action
  chooseOper(oper) {
    this.calculator_input.setOper(oper);
  }
}
