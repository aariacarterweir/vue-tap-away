import Hammer from 'hammerjs';
import Propagating from 'propagating-hammerjs';
import { omit } from 'lodash';

// re-enable user text selection
Hammer.defaults.cssProps = omit(Hammer.defaults.cssProps, 'userSelect');

export default Propagating(Hammer);
