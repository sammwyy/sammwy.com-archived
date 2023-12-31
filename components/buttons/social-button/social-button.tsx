import { IconButton } from '@chakra-ui/react';
import { JSXElementConstructor } from 'react';

export interface SocialButtonProps {
  link: string;
  scheme: string;
  Icon: JSXElementConstructor<any>;
}

export default function SocialButton({
  link,
  scheme,
  Icon,
}: SocialButtonProps) {
  return (
    <IconButton
      aria-label="icon"
      as="a"
      variant={'link'}
      colorScheme={scheme}
      icon={<Icon />}
      href={link}
      target="_blank"
      referrerPolicy="no-referrer"
    />
  );
}
