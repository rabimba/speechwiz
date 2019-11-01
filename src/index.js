import "babel-polyfill";
import aframe from 'aframe'
import {Animation, Entity, Scene} from "aframe-react";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Cursor from './components/Cursor'
import Sky from './components/Sky'
import Camera from './components/Camera'
import Earth from './components/Earth'
import Lighting from './components/Lighting'
import LumosRoom from './components/rooms/LumosRoom'
import DementorsRoom from './components/rooms/DementorsRoom'
import VoldemortRoom from './components/rooms/VoldemortRoom'
import Walls from './components/Walls'

class HarryPotter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lighting: '#000',
            doorVisible: true,
            voldemortVisible: true,
            stoneVisible: true,
            dementorsVisible: true,
            x: 18,
            y: 30,
            lumosRoom: 8,
            dementorsRoom: 19,
            height: 6
        }
        this.init();
    };

    init() {
        this.initSpeechRecognition();
        this.initSpeechRecognitionHandlers();
        recognition.start();
        console.log('Ready to receive a command.');
    }

    initSpeechRecognition() {
        recognition.lumos = ['lumos', 'luma', 'loomos', 'lumas', 'lumo', 'numa'];
        recognition.alohomora = ['alohomora'];
        recognition.expectoPatronum = ['expecto patronum', 'ekspecto patronum', 'ekspekto patronum'];
        recognition.wingardiumLeviosa = ['wingardium leviosa', 'wingardium lewiosa', 'guardian leviosa', 'gardium leviosa'];
        recognition.avadaKedavra = ['avada kedavra', 'awada kedavra', 'avada kedawra', 'awada kedawra'];

        var grammar = '#JSGF V1.0; grammar spells; public <spell> = '
            + recognition.lumos
                .concat(recognition.alohomora)
                .concat(recognition.expectoPatronum)
                .concat(recognition.wingardiumLeviosa)
                .concat(recognition.avadaKedavra)
                .join(' | ')
            + ' ;'

        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'pl-PL';
        recognition.interimResults = false;
        recognition.maxAlternatives = 10;
    }

    initSpeechRecognitionHandlers() {
        recognition.onresult = (event) => {

            var last = event.results.length - 1;
            var word = event.results[last][0].transcript;
            console.log('Confidence: ' + event.results[0][0].confidence);
            console.log(word);

            var wordList = event.results[last];

            if (this.isMatch(wordList, event.srcElement.lumos)) {
                this.lumos();
            } else if(this.isMatch(wordList, event.srcElement.alohomora)) {
                this.alohomora();
            } else if(this.isMatch(wordList, event.srcElement.expectoPatronum)) {
                this.expectoPatronum();
            } else if(this.isMatch(wordList, event.srcElement.wingardiumLeviosa)) {
                this.wingardiumLeviosa();
            } else if(this.isMatch(wordList, event.srcElement.avadaKedavra)) {
                this.avadaKedavra();
            }
        }

        recognition.onspeechend = function () {
            // recognition.stop();
        }

        recognition.onend = function () {
            console.log('Ready to receive a command.');
            recognition.start();
        }

        recognition.onnomatch = function (event) {
            console.log("I didn't recognise word.");
        }

        recognition.onerror = function (event) {
            console.log("Error occurred in recognition: " + event.error);
        }
    }

    isMatch(wordList, dictionaryList) {
        for (var i = 0, wLen = wordList.length; i < wLen; i++) {
            for (var j = 0, dLen = dictionaryList.length; j < dLen; j++) {
                if (wordList[i].transcript.toLowerCase() === dictionaryList[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    lumos() {
        this.setState({
            lighting: "#FFF"
        })
    }

    alohomora() {
        this.setState({
            doorVisible: false
        })
    }

    expectoPatronum() {
        this.setState({
            dementorsVisible: false
        })
    }

    wingardiumLeviosa() {
        this.setState({
            stoneVisible: false
        })
    }

    avadaKedavra() {
        this.setState({
            voldemortVisible: false
        })
    }

    render() {
        window.app = this;

        return (
            <Scene physics>
                <a-assets>
                    <img id="carpet" src="./carpet.jpg"/>
                    <img id="wall" src="./wall.jpg"/>
                    <img id="floor" src="./floor.jpg"/>
                    <img id="door" src="./door.jpg"/>

                    <asset-item id="dementor-obj" src="./models/Dementor/Dementor.obj"></asset-item>
                    <asset-item id="dementor-mtl" src="./models/Dementor/Dementor.mtl"></asset-item>
                    <asset-item id="voldemort-obj" src="./models/Voldemort/LordVoldemort.obj"></asset-item>
                    <asset-item id="voldemort-mtl" src="./models/Voldemort/LordVoldemort.mtl"></asset-item>
                    <asset-item id="rock-obj" src="./models/rock/Rock1.obj"></asset-item>
                    <asset-item id="rock-mtl" src="./models/rock/Rock1.mtl"></asset-item>
                </a-assets>

                <Camera>
                    <Cursor/>
                </Camera>

                <Sky color="#000"/>
                <Earth />

                <Lighting color={this.state.lighting}/>

                <Walls
                    x={this.state.x}
                    y={this.state.y}
                    height={this.state.height}
                />

                <LumosRoom
                    doorVisible={this.state.doorVisible}
                    lumosRoom={this.state.lumosRoom}
                    x={this.state.x}
                    height={this.state.height}
                />

                <DementorsRoom

                    doorVisible={this.state.doorVisible}
                    stoneVisible={this.state.stoneVisible}
                    dementorsVisible={this.state.dementorsVisible}
                    dementorsRoom={this.state.dementorsRoom}
                    x={this.state.x}
                    y={this.state.y}
                    height={this.state.height}
                />

                <VoldemortRoom
                    voldemortVisible={this.state.voldemortVisible}
                    y={this.state.y}
                />



            </Scene>
        );
    }
}


const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

const content = document.getElementById('app')
ReactDOM.render(<HarryPotter />, content)
