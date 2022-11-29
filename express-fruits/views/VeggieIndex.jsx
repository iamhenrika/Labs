const React = require('react')

class VeggieIndex extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout title="Vegetables Index Page">
                <nav>
                    <a href="/vegetables/new">Create Vegetable</a>
                </nav>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li key={i}>
                                The{' '}
                                <a style={{ color: "blue" }} href={`/vegetables/${vegetable._id}`}>
                                    {vegetable.name}
                                </a>{' '}
                                is {vegetable.color} <br></br>
                                {vegetable.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`}
                                <br />
                            </li>
                        );
                    })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = VeggieIndex