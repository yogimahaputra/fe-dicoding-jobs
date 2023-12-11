import React, { HTMLAttributes } from 'react';
import { IChildrenComponent } from '@/common/type/global';
import Link from 'next/link';
import styles from './index.module.scss';

const Title = ({
  children,
  ...props
}: IChildrenComponent & HTMLAttributes<HTMLElement>) => {
  return <h1 {...props}>{children}</h1>;
};
const SubTitle = ({
  children,
  ...props
}: IChildrenComponent & HTMLAttributes<HTMLElement>) => {
  return <h3 {...props}>{children}</h3>;
};
const Text = ({
  children,
  strong,
  ...props
}: IChildrenComponent & HTMLAttributes<HTMLElement> & { strong?: boolean }) => {
  let className = [props.className];

  if (strong) {
    className = [...className, styles.strong];
  }

  return (
    <p {...props} className={className.join(' ')}>
      {children}
    </p>
  );
};
const LinkText = ({
  children,
  href,
  ...props
}: IChildrenComponent & { href: string } & HTMLAttributes<HTMLElement>) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
const Small = ({
  children,
  ...props
}: IChildrenComponent & HTMLAttributes<HTMLElement>) => {
  return <small {...props}>{children}</small>;
};

const Typography = () => {
  return;
};

Typography.Text = Text;
Typography.LinkText = LinkText;
Typography.Title = Title;
Typography.SubTitle = SubTitle;
Typography.Small = Small;
export default Typography;
