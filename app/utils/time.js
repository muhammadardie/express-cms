export const parsehumanTime = (humanTime) => {
    const match = humanTime.match(/^(\d+)([smhd])$/); // Matches a number followed by 's', 'm', 'h', or 'd'
    
    if (!match) {
      throw new Error("Invalid expiration format. Use formats like '30m', '7d', '2h', '60s'.");
    }
  
    const value = parseInt(match[1], 10);
    const unit = match[2];
  
    switch (unit) {
      case 's': // Seconds
        return value;
      case 'm': // Minutes
        return value * 60;
      case 'h': // Hours
        return value * 60 * 60;
      case 'd': // Days
        return value * 24 * 60 * 60;
      default:
        throw new Error("Invalid time unit. Use 's', 'm', 'h', or 'd'.");
    }
}