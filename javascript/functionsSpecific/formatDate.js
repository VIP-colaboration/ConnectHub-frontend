/**
 * format java.util Date to intended format
 * @param {} dateString 
 * @returns date in YYYY-MM-DD HH:MM format
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    const isoString = date.toISOString();
    return isoString.slice(0, 16).replace('T', ' ');
}