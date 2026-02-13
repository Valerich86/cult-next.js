'use client'
import { useReportWebVitals } from 'next/web-vitals';


// Локально определяем тип для записи LCP
interface LCPEntry extends PerformanceEntry {
  element?: Element | null;
  size?: number;
  renderTime?: number;
  url?: string;
  startTime: number;
  duration: number;
}

export default function WebVitals() {
  useReportWebVitals((metric) => {
    console.log('Next.js Web Vitals:', metric);
  });

  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver((entryList: PerformanceObserverEntryList) => {
      const entries = entryList.getEntries() as LCPEntry[];

      for (const entry of entries) {
        console.log('=== LCP Element Details ===');
        console.log('LCP Element:', entry.element ?? 'N/A');
        console.log('Tag:', entry.element?.tagName ?? 'N/A');
        console.log('Classes:', entry.element?.className ?? 'N/A');

        const textContent = entry.element?.textContent;
        console.log(
          'Text:',
          textContent ? textContent.substring(0, 50) : 'N/A'
        );

        console.log('Start time (ms):', entry.startTime ?? 'N/A');
        console.log('Duration (ms):', entry.duration ?? 'N/A');

        // Безопасный доступ к опциональным полям
        if ('size' in entry) {
          console.log('Size (px):', (entry as any).size ?? 'N/A');
        }
        if ('renderTime' in entry) {
          console.log('Render time (ms):', (entry as any).renderTime ?? 'N/A');
        }
        if ('url' in entry) {
          console.log('URL (if image):', (entry as any).url ?? 'N/A');
        }

        console.log('=========================');
      }
    });

    try {
      observer.observe({
        type: 'largest-contentful-paint',
        buffered: true
      });
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  return null;
}
