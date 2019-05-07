import { TimelineMax } from 'gsap';

export type SectionState = {
  canAnimate: boolean,
  wasAnimate: boolean,
}

export type SectionProps = {
  sections: Section[];
}

export default class Section {
  className: string;
  element: HTMLElement;
  offsetHeight: number;
  offsetTop: number;
  isDark: boolean;
  
  constructor(element: HTMLElement, isDark: boolean) {
    this.className = element.className;
    this.element = element;
    this.offsetHeight = this.element.offsetHeight;
    this.offsetTop = this.element.offsetTop;
    this.isDark = isDark;
  }
}
