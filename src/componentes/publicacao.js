import React from 'react';
import { List, Datagrid, TextField, UrlField  } from 'react-admin';
import StarField from "./fields/starField/starField"

export const PublicacaoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="publicacao" />
            <StarField source="quantidadeEdicao" />
            <UrlField source="edicoes" />
            <TextField source="ultimaPublicacao" />
            <TextField source="avaliacao" />
            <TextField source="descricao" />
        </Datagrid>
    </List>
);