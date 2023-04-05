import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    w?: string,
    h?: string,
    className?: any
}

const AppLogo: FunctionComponent<Props> = props => {

    const {w, h, className} = props;

    return (
        <Link to='/' className={className}>
            <img src="/images/logo.svg" alt="Application Logo" width={w ?? 200} height={h ?? 50} />
        </Link>
    )
}

export default AppLogo;