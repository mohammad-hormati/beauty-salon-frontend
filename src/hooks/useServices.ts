import { getServices } from '@/services/services';
import { Service } from '@/types/service';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useServices(initialData?: Service[]) {
  return useQuery<Service[]>({
    queryKey: ['services'],
    queryFn: getServices,
    initialData,
    staleTime: 1000 * 60 * 2,
  });
}
