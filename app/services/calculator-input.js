import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CalculatorInputService extends Service {
  @tracked field_value = '0';
  @tracked last_value = '';
  @tracked option = '';

  add(value) {
    if (this.field_value == '0') {
      this.field_value = value;
    } else {
      this.field_value += value;
    }
  }

  remove() {
    if (this.field_value.length > 1) {
      this.field_value = this.field_value.substring(
        0,
        this.field_value.length - 1,
      );
    } else {
      this.field_value = '0';
    }
  }

  get() {
    return this.field_value;
  }

  alertValue(value) {
    alert(value);
  }

  setOper(oper) {
    this.option = oper;
    this.last_value = this.field_value;
    this.field_value = '0';
  }

  result() {
    
  }
}
