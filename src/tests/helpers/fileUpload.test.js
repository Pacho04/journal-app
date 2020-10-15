import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
    cloud_name: 'drafdpb6j',
    api_key: '549742485781816',
    api_secret: 'JjOZrK_9XCrjKxe30J6M0xlOZZQ'
})

describe('Pruebas en el fileUpload', () => {

    test('debe de cargar un archivo y retornar el URL', async(done) => {
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png','');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    });

    test('debe de retornar un error', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);

        expect(url).toBe(null);

    });
    
    
    
})
