import { Link } from 'waku';

import { Counter } from '../components/counter.js';

export default async function HomePage() {
    const data = await getData();

    return (
        <div>
            <title>{data.title}</title>
            <h1>{data.headline}</h1>
            <p>{data.body}</p>
            <Counter />
            <Link to="/about">About page</Link>
        </div>
    );
}

const getData = async () => {
    const data = {
        title: 'Waku',
        headline: 'Waku',
        body: 'Hello world!',
    };

    return data;
};

export const getConfig = async () => {
    return {
        render: 'static',
    };
};
