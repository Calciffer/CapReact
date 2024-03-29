import React, {Component} from 'react';
import {
    Media,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardFooter
} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect = (dish) => {
        this.setState({selectedDish: dish});
    };

    renderDish = (dish) => {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    <CardFooter className="text-muted">
                        <b>Price:
                        </b>
                        {dish.price}</CardFooter>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this
            .props
            .dishes
            .map((dish) => {
                return (
                    <div key={dish.id} className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media
                                    object
                                    src={dish.image}
                                    alt={dish.name}
                                    onClick={() => this.onDishSelect(dish)}/>
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>
                    </div>
                );
            });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;