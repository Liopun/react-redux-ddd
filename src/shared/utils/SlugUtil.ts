export class SlugUtil {

  public static getWindowSlug(): string {
    if (typeof window !== 'undefined') {
      var pathname = window.location.pathname;
      var slug = pathname.substring(pathname.lastIndexOf("/") + 1);
      return slug;
    } else {
      return "";
    }
  }

}