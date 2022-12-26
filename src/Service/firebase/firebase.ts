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