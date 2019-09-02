import _ from 'lodash';
import Hammer from './hammer';

const bindings = [];

export default {
    inserted(el) {
        const hammer = new Hammer(el);
        const click = e => e.stopPropagation();
        hammer.on('tap press', e => e.stopPropagation());
        el.addEventListener('click', click);
        bindings.push({ el, hammer, click });
    },
    unbind(el) {
        const { hammer, click } = _.find(bindings, binding => binding.el === el);
        hammer.off('tap press');
        el.removeEventListener('click', click);
        _.remove(bindings, binding => binding.el === el);
    },
};
