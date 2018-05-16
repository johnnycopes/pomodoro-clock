import { timer } from './timer';
import { input } from './input';

const Timer = timer();
const Input = input(Timer);
Input.init();
Timer.init();