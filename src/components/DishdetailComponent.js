import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    return (
        <div>
            <h4>Comments</h4>
            {comments.map((item) => {
                return (
                    <div key={item.id}>
                        <ul className="list-unstyled">
                            <li>{item.comment}</li>
                        </ul>
                        <ul className="list-unstyled">
                            <li>-- {item.author}, {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(item.date)))}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

const DishDetailСomponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
        </div>
    )
}

export default DishDetailСomponent;