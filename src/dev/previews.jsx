import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Post from "../components/Post";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Post">
                <Post/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews