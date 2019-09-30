import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PublicacaoList} from "./componentes/publicacao"
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
                <Resource name="publicacao" list={PublicacaoList} />
            </Admin>
        )
    }
}

export default App;