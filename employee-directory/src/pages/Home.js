import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Banner from "../components/Banner";
// import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchButton";

class Home extends Component {
    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of employees and update this.state.breeds
    componentDidMount() {
        API.getEmployeeList()
            .then(res => this.setState({ breeds: res.data.message }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <Banner />
                <Container style={{ minHeight: "80%" }}>

                    {/* <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        breeds={this.state.breeds}
                    /> */}
                    <SearchResults results={this.state.results} />
                </Container>
            </div>
        );
    }
}

export default Home;
