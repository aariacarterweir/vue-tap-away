import _ from 'lodash';
import Hammer from './hammer';

const bindings = [];

export default {
    inserted(el, { value }) {
        if (value === false) {
            return;
        }

        const hammer = new Hammer(el);
        const click = e => e.stopPropagation();

        // bind listeners
        hammer.on('tap press', click);
        el.addEventListener('click', click);

        // store binding
        bindings.push({ el, hammer, click });
    },
    unbind(el, { value }) {
        if (value === false) {
            return;
        }

        // find the binding
        const { hammer, click } = _.find(bindings, binding => binding.el === el);

        // unbind
        hammer.off('tap press', click);
        el.removeEventListener('click', click);

        // clear the binding from storage
        _.remove(bindings, binding => binding.el === el);
    },
};
