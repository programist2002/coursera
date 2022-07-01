import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishdetailComponent extends Component {

    renderDish(dish) {
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

    renderComments(comments) {
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
                                <li>-- {item.author}, {item.date}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </>
        )
    }

}

export default DishdetailComponent;