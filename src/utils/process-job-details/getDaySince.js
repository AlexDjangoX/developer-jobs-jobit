export function getDaysSince(timestamp) {
    const then = new Date(timestamp * 1000);
  
    const now = new Date();
    now.setHours(0, 0, 0, 0);
  
    const diffInTime = now.getTime() - then.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
  
    if (diffInDays < 1) {
      return 'Job Posted Today';
    }
  
    return `Job posted ${Math.round(diffInDays)} days ago`;
  }