"use client";

import {rem, Container as MantineContainer, ContainerProps, MantineStyleProp} from '@mantine/core'
import { useWindowSize } from '@/common/hooks/useWindowSize';

const styles: MantineStyleProp = {
    border: `${rem(1)} solid #E7DAED`,
    backgroundColor: "#F7F7FA",
    padding: "calc(var(--mantine-spacing-xl) * 2)",
}


const Container = (props: ContainerProps) => {
    return <MantineContainer size={useWindowSize()} {...props} />;
  };
  

const ColorContainer = (props: ContainerProps) => {
  const { children } = props
  return (<MantineContainer size="100%" {...props} style={styles} >

    <Container>
{children}
    </Container>

    </MantineContainer>
    
    );
};

export { Container, ColorContainer };