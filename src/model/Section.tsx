import { TimelineMax } from 'gsap';

export type SectionState = {
  canAnimate: boolean,
  wasAnimate: boolean,
}

export type SectionProps = {
  sections: HTMLElement[];
}

export default class Section {
  className: string;
  element: HTMLElement;
  offsetHeight: number;
  offsetTop: number;
  
  constructor(element: HTMLElement) {
    this.className = element.className;
    this.element = element;
    this.offsetHeight = this.element.offsetHeight;
    this.offsetTop = this.element.offsetTop;
  }
}
