import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import api from './services/api';

import { PublicacaoList} from "./componentes/publicacao"
class App extends Component{

    constructor(props) {
        super(props)

        this.state = {
            dataProvider: jsonServerProvider('http://localhost:3000'),
            dataProv: jsonServerProvider('http://jsonplaceholder.typicode.com'),
            data: [] 
            //dataProvider: jsonServerProvider(data)
        }
    }

    componentDidMount = async () => {
        const resp = await api.get("publicacao/")

        this.setState({
            data: resp.data
        })
    }

    render() {
        return (
            <>
            {/* <Admin dataProvider={this.state.dataProvider}>
                <Resource name="publicacao" list={PublicacaoList} />
            </Admin> */}
            
            <Admin dataProvider={this.state.dataProvider}>
                <Resource data={this.state.data} name="posts" list={PublicacaoList} />
            </Admin>
            </>
        )
    }
}

export default App;