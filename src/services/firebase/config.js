import { db } from "../../Firebase";
import {Firestore} from "./";

const configRef = db.collection("config");

async function createConfig(config) {
  const snapshot = await configRef.where("region", "==", config.region).get();
  if (!snapshot.empty) {
    const snapshotData = snapshot.docs[0].data();
    if (
      snapshotData.exchangeRate === config.exchangeRate &&
      snapshotData.shipFee === config.shipFee
    ) {
      return {
        status: "error",
        message: `Config ${config.region} bị trùng`,
      };
    } else {
      await Firestore.update("config", snapshot.docs[0].id, config);
      return {
        status: "success",
        message: "Chỉnh sửa thành công",
      };
    }
  } else {
    await Firestore.create("config", config);
    return {
      status: "success",
      message: "Thành công",
    };
  }
}

async function getConfigByRegion(region) {
  return new Promise((res, rej) => {
    configRef
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

export {
  createConfig,
  getConfigByRegion
}
