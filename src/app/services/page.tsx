import { QueryClient, dehydrate } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { getServices } from '@/services/services';
import ServicesClient from './ServicesClient';
import ThemeToggle from '@/components/ThemeToggle';

export default async function ServicesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ['services'], queryFn: getServices });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ServicesClient />
      <ThemeToggle />
    </HydrationBoundary>
  );
}
