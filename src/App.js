import React, { Component } from 'react';
// in src/App.js

import { Admin, Resource } from 'react-admin';
import { PostList } from './componentes/posts';
import { UserList } from './componentes/users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" />
    </Admin>
);

export default App;