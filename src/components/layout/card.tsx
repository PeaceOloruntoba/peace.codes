import { mergeClasses } from '@/lib/utils';

const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={mergeClasses(
        'rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
