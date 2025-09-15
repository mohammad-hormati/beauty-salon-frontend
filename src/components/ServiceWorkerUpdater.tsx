'use client';
import { useEffect, useState } from 'react';

export default function ServiceWorkerUpdater() {
  const [hasUpdate, setHasUpdate] = useState(false);
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    let registration: ServiceWorkerRegistration | undefined;

    navigator.serviceWorker.ready
      .then((reg) => {
        registration = reg;
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          if (!newSW) return;
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              // A new service worker is installed and waiting
              setHasUpdate(true);
            }
          });
        });
      })
      .catch(() => {
        /* ignore */
      });

    // cleanup
    return () => {
      // nothing to clean here; registration listener removed with page unload
    };
  }, []);

  function updateNow() {
    // Tell the waiting service worker to skipWaiting (standard approach)
    if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg && reg.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        // reload when the controlling SW changes
        navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload());
      } else {
        // fallback: try to update registration
        reg?.update();
      }
    });
  }

  if (!hasUpdate) return null;
  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 9999 }}>
      <button
        onClick={updateNow}
        style={{ padding: '8px 12px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6 }}
      >
        New version available — Click to update
      </button>
    </div>
  );
}
