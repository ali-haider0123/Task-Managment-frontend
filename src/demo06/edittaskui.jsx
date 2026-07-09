import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateTime } from 'luxon';
import { useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, FormGroup, Row } from 'react-bootstrap'

export default function EditTaskUI({ task }) {
    return (
        <>
            <div className='p-3'> UI to edit {task.Title} task here   </div>
        </>
    )
}