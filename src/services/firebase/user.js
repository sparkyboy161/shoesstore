import { Firestore } from ".";
import { auth, db } from "../../Firebase";

const userRef = db.collection("user");

async function create(email, username, password) {

    const snapshotByUsername = await userRef.where("username", "==", username).get();

    if (!snapshotByUsername.empty) {
        return {
            status: "error",
            message: `Tên ${username} đã tồn tại`,
        };
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const { user } = userCredential;
        const { uid } = user;
        const payload = { email, username, uid };
        const res = await Firestore.create('user', payload);
        if (res.status === 'error') {
            return {
                status: 'error',
                message: "Tạo tài khoản không thành công"
            }
        }
        return {
            status: 'success',
            message: 'Đăng ký tài khoản thành công'
        }
    } catch (error) {
        const { code } = error;
        if (code === 'auth/weak-password') {
            return {
                status: 'error',
                message: "Mật khẩu của bạn quá yếu"
            }
        } else if (code === 'auth/email-already-in-use') {
            return {
                status: 'error',
                message: "Email đã được sử dụng"
            }
        } else {
            return {
                status: 'error',
                message: "Tạo tài khoản không thành công"
            }
        }
    }
}

async function login(email, password) {
    try {
        const user = await auth.signInWithEmailAndPassword(email, password);
        return {
            status: 'success',
            user,
            message: 'Đăng nhập thành công'
        }
    } catch (error) {
        const { code } = error;
        if (code === 'auth/user-not-found') {
            return {
                status: 'error',
                message: 'Tài khoản chưa tồn tại'
            }
        }
        return {
            status: 'error',
            message: 'Đăng nhập thất bại'
        }
    }
}

const User = {
    create,
    login
};

export {
    User
}
