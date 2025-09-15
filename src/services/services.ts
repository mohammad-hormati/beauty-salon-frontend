import axiosInstance from '@/lib/axios';
import { Service } from '@/types/service';

export async function getServices(): Promise<Service[]> {
  const { data } = await axiosInstance.get<Service[]>('/services');
  return data;
}
