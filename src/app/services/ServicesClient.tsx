'use client';

import React from 'react';
import { useServices } from '@/hooks/useServices';

export default function ServicesClient({ initialData }: { initialData?: any }) {
  const { data: services, isLoading, error } = useServices(initialData);

  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="space-y-4">
      <ul className="list-disc pl-4">
        {services?.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
