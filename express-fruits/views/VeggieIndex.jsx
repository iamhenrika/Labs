const React = require('react')

class VeggieIndex extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <nav>
                    <a href="/vegetables/new">Create Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetables, i) => {
                        return (
                            <li key={i}>
                                The{' '}
                                <a style={{ color: "blue" }} href={`/vegetables/${i}`}>
                                    {vegetables.name}
                                </a>{' '}
                                is {vegetables.color} <br></br>
                                {vegetables.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = VeggieIndex