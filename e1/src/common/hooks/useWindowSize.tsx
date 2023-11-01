import { useMediaQuery } from '@mantine/hooks';

export const useWindowSize = () => {
    const sizes = {
      isXs: useMediaQuery('(max-width: 768px)'),
      isSm: useMediaQuery('(max-width: 992px)'),
      isMd: useMediaQuery('(max-width: 1200px)'),
      isLg: useMediaQuery('(max-width: 1400px)'),
    };
  
    return sizes.isXs 
    ? 'xs' 
    : sizes.isSm
      ? 'sm'
      : sizes.isMd 
        ? 'md'
        : sizes.isLg
          ? 'lg' 
          : 'xl';
  }

