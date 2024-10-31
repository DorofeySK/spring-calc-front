import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {
    @action
    showButton(text) {
        alert(`Button ${text} pressed`);
    }
}