export class Functions {
  static extractIdFromUrl(url?: string | null): string | null {
    if (!url) {
      return null;
    }
    const regex = /\/([0-9]*)\/$/;
    const matches = url.match(regex);
    if (matches && matches.length > 1) {
      return matches[1];
    }
    return null;
  }
}
