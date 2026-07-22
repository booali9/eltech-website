'use client';

export default function ManageCookieButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).__openCookieManage) {
          (window as any).__openCookieManage();
        }
      }}
      className="btn btn-primary"
      style={{ padding: '10px 20px' }}
    >
      Manage Cookie Preferences
    </button>
  );
}
