import { timer } from './timer';
import { input } from './input';

const Timer = timer();
const Input = input(Timer);
Timer.init();