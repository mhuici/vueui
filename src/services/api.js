import { typicodeInstance } from './index.js'


export const getPosts = () => typicodeInstance.get('posts')

export const getPhotos = (serverparams) => typicodeInstance.get('photos',{params: serverparams})

