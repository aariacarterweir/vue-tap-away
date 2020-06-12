import Hammer from 'hammerjs';
import Propagating from 'propagating-hammerjs';

// enable text selection on root
delete Hammer.defaults.cssProps.userSelect;

export default Propagating(Hammer);
