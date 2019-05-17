
class Utils {
  static findSection(sections, sectionName) {
    return !!sections.find(section => section.className === sectionName);
  }

  static scrollTo(to, duration) {
      const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to.offsetTop - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = (t, b, c, d) => {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
      },
      animateScroll = () => {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
          }
          else {
            element.scrollTop = to.offsetTop;
          }
      };
      animateScroll();
  };
}

export default Utils;
