import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CalculatorInputService extends Service {
  @tracked field_value = '0';
  @tracked last_value = '';
  @tracked operation = '';

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
    this.operation = oper;
    this.last_value = this.field_value;
    this.field_value = '0';
  }

  result() {
    this.sendRequest();
  }

  async sendRequest() {
    let oper;
    switch (this.operation) {
      case '+':
        oper = 'sum';
        break;
      case '-':
        oper = 'sub';
        break;
      case '/':
        oper = 'div';
        break;
      case '*':
        oper = 'mult';
        break;
      default:
        return;
    }
    let rs = await fetch('http://127.0.0.1:8080/api/' + oper, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        first: this.last_value,
        second: this.field_value,
      }),
    });
    let result = await rs.json() 
    console.log(result);
    this.field_value = result[oper];
    this.last_value = '';
    this.operation = '';
  }
}
