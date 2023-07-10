import { ReactNode } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
children: ReactNode;
}

const Link = ({ children, ...props }: LinkProps) => {
return (
    <NextLink {...props}>
        <a>{children}</a>
    </NextLink>
    );
};

export default Link;
