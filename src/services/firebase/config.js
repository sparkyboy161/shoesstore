import { db } from "../../Firebase";

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
      await configRef.doc(snapshot.docs[0].id).set(config);
      return {
        status: "success",
        message: "Chỉnh sửa thành công",
      };
    }
  } else {
    configRef.doc().set(config);
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
