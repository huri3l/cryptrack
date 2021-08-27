import { Button, useBreakpointValue } from '@chakra-ui/react';
import { ButtonProps } from '@chakra-ui/react';
import { useEffect } from 'react';

export const ResponsiveButton = (props: ButtonProps) => {
  const buttonSize = useBreakpointValue({
    base: 'sm',
    xs: 'sm',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'lg',
  });

  useEffect(() => {
    console.log(buttonSize);
  }, [buttonSize]);

  return (
    <Button {...props} size={buttonSize}>
      {props.children}
    </Button>
  );
};
