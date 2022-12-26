# API #irtual Store

<h4>✏️ Readme it is in development...✏️</h4>

<p>

* [Instalation](#Instalation)
* [TheProject](#the-project)

</p>

# Instalation

~~~bash
npm install -y node
tsc --init
~~~

#### Dependecies

~~~bash
npm install -y express bcrypt express-fileupload express-validator dotenv cors nodemon uuid multer path mongoose jimp 
~~~

#### devDependecies

~~~bash
npm install -D @types/express @types/bcrypt @types/express-fileupload @types/express-validator @types/dotenv @types/cors @types/nodemon @types/uuid @types/multer @types/mongoose @types/jimp 
~~~

# The Project
The project is a Rest API in winch simulate a request the ecommerce.

### Routes
* sign in, sign up and change password of user;
* add data, show data and edit phone number of user;
* add address, get address, edit address e delete address of user;
* add wishlist, show wishlist and delete item of wishlist of user.
* add category and show category of product;
* add product, show produtc, attach image of product,edit product and delete product.

### Database

The database used in project it was the mongoDb and firebase storage.

#### Connecting with mongoDB

~~~bash
export const mongoConnect = async () => {
    try {
        await connect( process.env.MONGO_URL as string );
    } catch(error) {
        console.log("Erro conexão MongoDB.", error);
    }
}
~~~

### Config firebase

~~~bash
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SANDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

export default firebaseConfig;
~~~

### upload archive in firabse storage

~~~bash

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../../Database/Firebase/firebaseConfig";

export const uploadFile = async (file: Express.Multer.File) => {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, process.env.BUCKET_FIREBASE_URL);

  if (!file) return 'sem files';

  let download;

  const imagem = file;

  const fileName = Date.now() + "." + imagem.originalname.split('.').pop()

  const storageRef = ref(storage, 'images/' + fileName);

  const uploadTask = uploadBytesResumable(storageRef, imagem.buffer);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        download = downloadURL;
      });
    }

  );

  uploadTask.resume();

  return fileName;
}
~~~

* [Firabese Documentetion](https://firebase.google.com/docs/storage/web/upload-files#web-version-9_7)


#### Extra - Creating token with bcrypt

~~~bash
const variant = (Date.now() + Math.random()).toString();
token = ( await bcrypt.hash(variant, 10)).toString();
~~~

<p align="center">Made with 💙 by Eduardo Duarte 👽</p>