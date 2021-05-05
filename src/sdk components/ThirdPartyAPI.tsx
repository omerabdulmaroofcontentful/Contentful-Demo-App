import React, { Component } from 'react';
import {Card,Tag,Pill,Button } from '@contentful/forma-36-react-components';
import ReactJson from 'react-json-view'
const request = require('request');

export interface AppInstallationParameters { }

interface ConfigProps {
    sdk: any;
  }

  interface ConfigStats {
    joke: any;
  }

  

export default class ThirdPartyAPI extends Component<ConfigProps,ConfigStats> {
     constructor(props: any) {
        super(props);
        this.state = {joke:{}}
      }

      async componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit", {
                "method": "GET"
              })
              .then(response => response.json())
              .then(jsondata => {
                this.setState({joke:jsondata})
                console.log(jsondata)})
              .catch(err => {
                console.error(err);
              });

      }

       giveMeNewJoke = ()=>{
          console.log('giveMeNewJoke')
          fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit", {
            "method": "GET"
          })
          .then(response => response.json())
          .then(jsondata => {
            this.setState({joke:jsondata})
            
            console.log(jsondata)})
          .catch(err => {
            console.error(err);
          });

      }

      // handleJoke(jsondata){
      //   //this.setState({joke:jsondata})
      // }

      render(){
        return(
            <>
                    <Card>
                      <Tag tagType="primary">3rd Party API</Tag>
                                <br />
                                <br />
                        <Pill label="3rd Party API" />
                      
                        <br />
                        <br />
                        
                          <Button className="normalButton" onClick={this.giveMeNewJoke}>I am Bored!!</Button>
                        <br />
                        <br />
                          <ReactJson src={this.state.joke} collapsed={0} />
                      
                    </Card>
            </>
        )
      }
  
}


