import Logo from './_components/Logo';
import Description from "./_components/Description";
import OpenLink from '../components/OpenLink';

const Default = () => {
    return (
        <>
            <header className="App-header">
                <Logo />
                <Description />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <OpenLink
                    title="Mi proyecto react (Github)"
                    url="https://github.com/dheeyi/desarrollo-frontend-react"
                />
            </header>
        </>
    );
};

export default Default;