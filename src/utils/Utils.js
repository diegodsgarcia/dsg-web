
class Utils {
  static findSection(sections, sectionName) {
    return !!sections.find(section => section.className === sectionName);
  }
}

export default Utils;
