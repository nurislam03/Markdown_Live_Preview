import React, { Component } from 'react';
import {markdown} from 'markdown';
import {
    Grid,
    Row,
    Col,
    Navbar
} from 'react-bootstrap';
import CustomTextArea from './CustomTextArea';



function TextAreaDesign(props) {
    return (
        <fieldset>
            <legend>{props.value}</legend>
        </fieldset>
    );
}

function CustomNavBar(props) {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    {props.value}
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            MarkdownToHTML: ''
        }
    }

    handleTextValue = (textValue) => {
        const MarkdownToHTML = markdown.toHTML(textValue);
        this.setState({
            text: textValue,
            MarkdownToHTML: MarkdownToHTML
        });
    }

    render() {
        return (
            <Grid>
        		<Row>
        			<Col md={6}>
                        <TextAreaDesign value={"Write Markdown"}/>
                        <CustomTextArea
                            value={this.state.text}
                            onTextChange={this.handleTextValue}
                        />
        			</Col>
        			<Col md={6}>
                        <TextAreaDesign value={"Markdown Preview"}/>
        			</Col>
        		</Row>
        	</Grid>
        );
    }
}

export default HomePage;
