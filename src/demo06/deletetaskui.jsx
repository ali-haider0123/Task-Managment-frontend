import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateTime } from 'luxon';
import { useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, FormGroup, Row } from 'react-bootstrap'

export default function DeleteTaskUI({ task }) {
    return (
        <>
            <div className='p-3'> UI to delete {task.Title} task here   </div>
        </>
    )
}