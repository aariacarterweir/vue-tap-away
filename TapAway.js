import _ from 'lodash';
import 'event-propagation-path';
import Hammer from './hammer';

const hammer = new Hammer(document.documentElement);
const bindings = [];

hammer.on('tap press', e => {
    bindings.forEach(({ el, callback }) => {
        // get composed path using propagationPath polyfill which will use native browser
        // methods if available and otherwise fallback to a custom implementation
        const path = e.srcEvent.propagationPath();

        // if there is no composed path, disregard event, it may be an anomaly
        if (! path || ! path.length) {
            return;
        }

        // check if the path includes the directive targeted element
        if (e.target !== el && ! _.includes(path, el)) {
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
