import React from "react";
import { Col, Form, Row, Image } from "react-bootstrap";
import CustomButton from "../components/CustomButton";

function CustomItemPokemon(props) {
  const { item, xs, sm, md, lg, xl } = props;

  return (
    <>
      <Col className="item-display" xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
        <Form.Group className="form-group-item">
          <Image src={item.ThumbnailImage} thumbnail />
          <Form.Text className="item-number">#{item.number}</Form.Text>
          <Form.Text className="item-name">{item.name}</Form.Text>
          <Row className="item-row">
            {item.type.map((type, index) => (
              <CustomButton key={index} type={type} />
            ))}
          </Row>
        </Form.Group>
      </Col>
    </>
  );
}

export default CustomItemPokemon;
