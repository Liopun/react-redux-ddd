import psl from 'psl'

export class TextUtil {

  public static validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public static atLeast (text: string, length: number): boolean {
    if (!!text === false || text.length >= length) return false;
    return true;
  }

  public static atMost (text: string, length: number): boolean {
    if (!!text === false || text.length <= length) return false;
    return true;
  }

  public static getDomainNameFromUrl (url: string): string {
    if (!!url === false) return "";
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return psl.get(hostname) || '';
  }

  public static sanitizeTimestamp (timestamp: string): string {
    const timestampParts = timestamp.split(' ')

    if (timestampParts.length < 2) return ''

    let lastPart = timestampParts[timestampParts.length - 1]
    switch (lastPart) {
      case 'years':
        lastPart = 'yrs'
        break
      case 'year':
        lastPart = 'yr'
        break
      case 'months':
        lastPart = 'mons'
        break
      case 'month':
        lastPart = 'mon'
        break
      case 'hours':
        lastPart = 'hrs'
        break
      case 'hour':
        lastPart = 'hr'
        break
      case 'minutes':
        lastPart = 'mins'
        break
      case 'minute':
        lastPart = 'min'
        break
      case 'seconds':
        lastPart = 'secs'
        break
      case 'second':
        lastPart = 'sec'
        break
      default:
    }

    timestampParts[timestampParts.length - 1] = lastPart

    return timestampParts.slice(-2).join(' ')
  }
}