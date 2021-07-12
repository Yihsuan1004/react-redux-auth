import React from 'react';
import { Card } from 'react-bootstrap';
import { ReactComponent as Loading } from '../../assets/img/loading.svg'

export const Notification = (props) => {
    const {notifications} = props;
  
    return (
        <Card className="card-container">
            <Card.Header as="h4">
                Notification
            </Card.Header>
            <Card.Body>
                {!notifications? <Loading /> : notifications.map(item => {
                    return (
                        <Card.Text key={item.id}>
                            <Card.Subtitle>
                                <span className="text-danger">{item.user}</span>  {item.content}
                            </Card.Subtitle>
                            {new Date(item.time.seconds* 1000).toString().substr(0,21)}
                        </Card.Text>
                    )
                })
                }
            </Card.Body>
        </Card>
    )
}