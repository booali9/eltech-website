export type CookieConsent = 'accepted' | 'rejected' | null;

const STORAGE_KEY = 'eltech_cookie_consent';

export function getCookieConsent(): CookieConsent {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEY) as CookieConsent;
}

export function setCookieConsent(action: CookieConsent): void {
  if (typeof window === 'undefined') return;
  if (action) {
    localStorage.setItem(STORAGE_KEY, action);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
