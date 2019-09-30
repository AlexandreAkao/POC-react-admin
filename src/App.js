import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
class App extends Component{

    constructor(props) {
        super(props)

        this.state = {
            //dataProvider: jsonServerProvider('http://jsonplaceholder.typicode.com')
            dataProvider: jsonServerProvider('http://my-json-server.typicode.com/AlexandreAkao/demo')

        }
    }

    render() {
        console.log(this.state.dataProvider)

        return (
            <Admin dataProvider={this.state.dataProvider}>
                <Resource name="users" list={ListGuesser} />
            </Admin>
        )
    }
}

export default App;