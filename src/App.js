import React, { useState, useEffect } from "react";
import axios from 'axios';
import './styles/style.css';
// import logo from "./logo.svg";
import "./App.css";
import {
    Form,
    Row,
    Col,
    FormControl,
    InputGroup,
    Button,
    Container,
    Image,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from './components/CustomButtonComponent';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            '/pokedex/kalos',
          );
          
          const resultSmall = result.data.slice(0, 8);
          console.log('a', resultSmall)
          setData(resultSmall);
        };
       
        fetchData()
      }, []);

    return (
        <div className="container containerCustom">
            <Container>
                <Form className="formSearch">
                    <Form.Group as={Row} controlId="formSearch">
                        <Col sm="6">
                            <Form.Label className="labelSearch">
                                Name or Number
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl/>
                                <InputGroup.Append>
                                    <InputGroup.Text  className="iconSearch">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Form.Text>
                                Use the Advanced Search to explore Pokémon by type,
                                weakness, Ability, and more!
                            </Form.Text>
                        </Col>
                        <Col sm="6">
                            <Form.Label className="guideSearch">
                                Search for a Pokémon by name or using its National Pokédev number.
                            </Form.Label>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>

            <Container className="containerList">
                {
                    data.map((item, index) => 
                    <span className="items" key={index}>
                        <Image src={item.ThumbnailImage} thumbnail />
                        <div className="infItems">
                            <h6>#{item.id}</h6>
                            <h5>{item.name}</h5>
                            {
                                item.type.map(type =>
                                    <CustomButton type = {type}/>
                                )
                            }
                        </div>
                    </span>
                    )
                }
            </Container>
            <Container className="textAlignCenter">
                <Button variant="primary">
                    Load more Pokémon
                </Button>
            </Container>
        </div>
    );
}

export default App;
