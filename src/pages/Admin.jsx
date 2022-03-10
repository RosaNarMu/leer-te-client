import React from 'react';
import StoryTable from '../components/Admin/StoryTable';
import UserTable from '../components/Admin/UserTable';
import CommentTable from '../components/Admin/CommentTable';

export default function Admin() {



    const commentTh = ['Id', 'Usuario', 'Relato', 'Puntuación', 'Contenido'];

    return (
        <div className="admin-display-main">

            <h1>Relatos</h1>

            <StoryTable />

            <h1>Usuarios</h1>

            <UserTable />

            <h1>Comentarios</h1>

            <CommentTable />
        </div>

    )
}
