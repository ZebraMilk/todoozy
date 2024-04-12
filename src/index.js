import './style.css';
import { sampleTodoozy } from './make-todo';
import { loadUI } from './ui';

loadUI();

console.log("Oh boy, this one's a todoozy!");

console.table(sampleTodoozy);

console.log(sampleTodoozy.howMuchTime());
