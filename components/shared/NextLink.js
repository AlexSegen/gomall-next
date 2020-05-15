import Link from 'next/link';

const NextLink = ({as, href, className, children}) => {
    return (
        <Link as={as} href={href}>
            <a className={className}>{children}</a>
        </Link>
    )
}

export default NextLink