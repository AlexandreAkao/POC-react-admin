import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
class App extends Component{

    constructor(props) {
        super(props)

        this.state = {
            dataProvider: jsonServerProvider('http://localhost:3000')
            //dataProvider: jsonServerProvider(data)
        }
    }

    render() {
        return (
            <Admin dataProvider={this.state.dataProvider}>
                <Resource name="users" list={ListGuesser} />
                <Resource name="publicacao" list={ListGuesser} />
            </Admin>
        )
    }
}

export default App;