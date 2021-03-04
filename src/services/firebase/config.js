import { db } from "../../Firebase";

const configCollection = db.collection("config");

export function createConfig(config) {
    configCollection.doc().set(config);
}

export async function getConfigByRegion(region) {
  return new Promise((res, rej) => {
    configCollection
      .where("region", "==", region)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const config = querySnapshot.docs[0].data();
          res(config);
        } else {
          res({ region, exchangeRate: null, shipFee: null });
        }
      })
      .catch((err) => {
        rej(err);
      });
  });
}
