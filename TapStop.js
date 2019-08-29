import _ from 'lodash';
import Hammer from './hammer';

const bindings = [];

export default {
    inserted(el) {
        const hammer = new Hammer(el);
        hammer.on('tap', e => e.stopPropagation());
        bindings.push({ el, hammer });
    },
    unbind(el) {
        const { hammer } = _.find(bindings, binding => binding.el === el);
        hammer.off('tap');
        _.remove(bindings, binding => binding.el === el);
    },
};
