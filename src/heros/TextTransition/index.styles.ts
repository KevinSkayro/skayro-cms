import { cn } from '@/utilities/cn'

export const styles = {
  mainWrapper: cn(
    `
    relative 
    -mt-[10.4rem] 
    flex 
    items-center 
    justify-center 
    text-white
    `,
  ),
  textOuterWrapper: cn(
    `
    container 
    mb-8 
    z-10 
    relative 
    flex 
    items-center 
    justify-center
    `,
  ),
  textInnerWrapper: cn(
    `
    max-w-[45.5rem] 
    text-center
    `,
  ),
  transitionText: (isAnimating?: boolean) =>
    cn(
      `
        mb-6
        ${isAnimating ? 'animate-flipInX' : ''}
      `,
    ),

  staticText: cn(
    `
    mt-4 
    transition-opacity 
    duration-1000
    `,
  ),

  links: cn(
    `
    flex 
    justify-center 
    gap-4
    `,
  ),
  mediaWrapper: cn(
    `
    min-h-[80vh] 
    select-none
    `,
  ),
}
