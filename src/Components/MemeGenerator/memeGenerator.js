import React, { Component } from 'react';
import './memeGenerator.css';

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0]) // check data is present
                this.setState({ allMemeImgs: memes })
            })
    }
    render() {
        return (
            <div>
                <form className="meme-form">
                    <input
                        type='text'
                        name='topText'
                        placeholder='Top Text'
                        value={this.state.topText}
                    />
                    <input
                        type='text'
                        name='bottomText'
                        placeholder='Bottom Text'
                        value={this.state.bottomText}
                    />
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}
export default MemeGenerator;