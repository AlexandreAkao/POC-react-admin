import React from 'react';
import { List, Datagrid, TextField, UrlField, ReferenceField  } from 'react-admin';
import StarField from "./fields/starField/starField"

export const PublicacaoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        {console.log(props)}

            <TextField source="id" />
            <TextField source="publicacao" />
            <TextField source="quantidadeEdicao" />
            <UrlField source="edicoes" />
            <TextField source="ultimaPublicacao" />
            <ReferenceField source="avaliacao" reference="publicacao">
                <StarField  source="avaliacao" />
            </ReferenceField>
            <TextField source="descricao" />
        </Datagrid>
    </List>
);