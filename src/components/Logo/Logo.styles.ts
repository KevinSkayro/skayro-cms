import { cn } from '@/utilities/cn'

export const styles = {
  logoImage: (customClass?: string) =>
    cn(
      `
        w-full 
        h-[34px]
      `,
      customClass,
    ),
}
