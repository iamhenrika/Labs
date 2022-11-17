const React = require('react')

class VeggieNew extends React.Component {
    render() {
        return (
            <div>
                <h1>New Vegetable Page</h1>
                <nav>
                    <a href="/vegetables">Home Page</a>
                </nav>
                <form action="/vegetables" method="POST">
                    Name: <input type="text" name="name"/> <br />
                    Color: <input type="text" name="color" /> <br />
                    Is Ready to Eat: <input type="checkbox" name="readyToEat" /> <br />
                    <input type="submit" value="Create Vegetable" />
                </form>
                </div>
        )
    }
}

module.exports = VeggieNew