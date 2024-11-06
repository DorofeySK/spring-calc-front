import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class InputOutputFieldComponent extends Component {
  @service('calculator-input') calculator_input;

  @computed('calculator_input.field_value')
  get fieldValue() {
    return this.calculator_input.field_value;
  }
}
