import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

//Menu is a generic component that takes in information about the menu and returns a component.
//This componenet displays all items passed into it with links that reflect each individual item passed in.
//Props Are:
//items---Array of items from the database
//category---string used for item links
//title---string used for displaying at the top of the component
//menuDesc---string from the database used under the menu title
function Menu({ items, category, title, menuDesc}) {
  console.log(items);
  return (
    <section className="col-md-4">
      <div className="MenuAddLinkContainer">
        <Link className="MenuAddLink" to={`/${category}/new`}>Add a new {category.substring(0, category.length-1)}</Link>
      </div>
      
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>
            {menuDesc[category]}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${category}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
