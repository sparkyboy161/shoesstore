import firebase, { storage, db } from "../../Firebase";

async function saveImage(object, file, id) {
  const metadata = {
    contentType: "image/jpg",
  };
  let base64image = file.split(";base64,").pop();
  const storageRef = storage.child(
    `${object}/${id}/${new Date().getTime()}.jpg`
  );
  const uploadTask = storageRef.putString(base64image, "base64", metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log("error: ", error);
      return {
        status: "errors",
        message: "Tải ảnh lên không thành công",
      };
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log("File available at", downloadURL);
        db.collection(object)
          .doc(id)
          .update({
            photos: firebase.firestore.FieldValue.arrayUnion(downloadURL),
          });
      });
    }
  );
}

async function create(collectionName, data){
  const res = await db.collection(collectionName).add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  return res;
}

export function update(collectionName, doc)

export { saveImage, create };
