import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { JSXElementConstructor, PropsWithChildren } from 'react';

export interface SocialButtonProps extends PropsWithChildren {
  link: string;
  Icon: JSXElementConstructor<any>;
}

export default function PageButton({
  link,
  children,
  Icon,
}: SocialButtonProps) {
  const { pathname } = useRouter();
  const isSelected = pathname === link;

  return (
    <Link href={link}>
      <Button
        as="span"
        variant={'ghost'}
        colorScheme={'whiteAlpha'}
        color={isSelected ? 'var(--primary)' : '#ddd'}
        gap={'10px'}
        borderRadius={'none'}
        borderBottom={'2px solid transparent'}
        borderColor={isSelected ? 'var(--gradient)' : 'none'}
        _hover={{
          color: isSelected ? 'var(--primary)' : 'var(--secondary)',
        }}
      >
        <Icon />
        <span>{children}</span>
      </Button>
    </Link>
  );
}
