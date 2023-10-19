export function formatText(text) {
    if(text.length >7)return text.substring(0, 7) + '...';
    return text
  }