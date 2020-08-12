import React from "react";
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
    const data = [
        {
            id: '#002',
            name: 'Ivysaur',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Grass', 'Poison']
        },
        {
            id: '#012888888',
            name: 'Butterfree',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Bug', 'Flying']
        },
        {
            id: '#02088888',
            name: 'Raticate',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Normal']
        },
        {
            id: '#00288',
            name: 'Ivysaur',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Grass', 'Poison']
        },
        {
            id: '#0188',
            name: 'Butterfree',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Bug', 'Flying']
        },
        {
            id: '#023',
            name: 'Raticate',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Normal']
        },
        {
            id: '#011',
            name: 'Butterfree',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Bug', 'Flying']
        },
        {
            id: '#021',
            name: 'Raticate',
            imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
            types: ['Normal']
        }
    ];

    return (
        <div className="container">
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
                    data.map(items => 
                    <div className="items" key={items.id}>
                        <Image src={items.imageUrl} thumbnail />
                        <div className="infItems">
                            <h6>{items.id}</h6>
                            <h5>{items.name}</h5>
                            {
                                items.types.map(type =>
                                    <CustomButton type = {type}/>
                                )
                            }
                        </div>
                    </div>
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
