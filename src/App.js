import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/style.css";
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
import CustomButton from "./components/CustomButton";

function App() {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(8);

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setIsSearching(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("pokedex/kalos");

      setData(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isSearching) {
      const pattern = new RegExp(searchText, "gi");
      const searchResult = data.filter(
        (entry) => entry.name.match(pattern) || entry.number.match(pattern)
      );

      setSearchResult(searchResult);
      setIsSearching(false);
    }
  }, [data, searchText, isSearching]);

  const dataToDisplay =
    searchResult.length > 0 ? searchResult.slice(0, size) : data.slice(0, size);

  return (
    <div>
      <Form className="form-search" onSubmit={onSearchSubmit}>
        <Form.Group
          as={Row}
          controlId="formSearch"
          className="form-group-search"
        >
          <Col xs={12} sm={8} md={6} lg={6} xl={6}>
            <Form.Label className="label-search">Name or Number</Form.Label>
            <InputGroup className="mb-2">
              <FormControl value={searchText} onChange={handleSearchChange} />
              <InputGroup.Append type="submit">
                <InputGroup.Text
                  className="iconSearch"
                  onClick={onSearchSubmit}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Form.Text className="text-search">
              Use the Advanced Search to explore Pokémon by type, weakness,
              Ability, and more!
            </Form.Text>
          </Col>
          <Col xs={12} sm={4} md={6} lg={6} xl={6}>
            <Form.Label className="guide-search">
              Search for a Pokémon by name or using its National Pokédev number.
            </Form.Label>
          </Col>
        </Form.Group>
      </Form>

      <Container className="containerList">
        <Row>
          {dataToDisplay.map((item, index) => (
            <Col className="item-display" xs={12} sm={6} md={3} lg={3} xl={2}>
              <Form.Group className="form-group-item">
                <Image src={item.ThumbnailImage} thumbnail />
                <Form.Text className="item-number">#{item.number}</Form.Text>
                <Form.Text className="item-name">{item.name}</Form.Text>
                <Row className="item-row">
                  {item.type.map((type) => (
                    <CustomButton type={type} />
                  ))}
                </Row>
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="containe-load">
        <Button
          className="btn-load"
          onClick={() => setSize(size + 8)}
          size="sm"
        >
          Load more Pokémon
        </Button>
      </Container>
    </div>
  );
}

export default App;
