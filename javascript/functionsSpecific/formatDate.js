export function formatDate(dateString) {
    const date = new Date(dateString);
    const isoString = date.toISOString();
    return isoString.slice(0, 16).replace('T', ' ');
}