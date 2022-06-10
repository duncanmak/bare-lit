export function isLocal() {
  return !document.location.host.includes('microsoft');
}