
class Section {
  constructor(element) {
    this.className = element.className;
    this.element = element;
    this.offsetHeight = this.element.offsetHeight;
    this.offsetTop = this.element.offsetTop;
  }
}

export default Section;
