import _ from 'lodash';
import 'event-propagation-path';
import Hammer from './hammer';

const hammer = new Hammer(document.documentElement);
const bindings = [];

hammer.on('tap press', e => {
    bindings.forEach(({ el, callback }) => {
        if (e.target !== el && ! e.srcEvent.propagationPath().includes(el)) {
            callback();
        }
    });
});

export default {
    inserted(el, { value: callback }) {
        bindings.push({ el, callback });
    },
    unbind(el) {
        _.remove(bindings, binding => binding.el === el);
    },
};
