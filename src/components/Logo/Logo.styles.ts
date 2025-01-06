import { cn } from '@/utilities/cn'

export const styles = {
  logoImage: (customClass?: string) =>
    cn(
      `
        w-full 
        h-[34px]
        filter 
        drop-shadow-[0_0_1px_rgba(255,255,255,1)]
      `,
      customClass,
    ),
}
