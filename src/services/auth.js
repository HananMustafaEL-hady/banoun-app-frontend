import { client } from "./client";
import specialist from './../redux/reducers/specialist';

//API Login
export async function login(dataform) {
    let result = { data: null, isError: true, errorMessage: "" };
    const res = await client.post("/auth", dataform);
    if (res.data.code === 0) {
        result = { data: res.data, isError: false, errorMessage: "" };
        return result;
    } else if (res.data.code === 1) {
        result = {
            data: null,
            isError: true,
            errorMessage: "اسم المستخدم او كلمة المرور غير صحيح",
        };
        return result;
    } else {
        result = {
            data: null,
            isError: true,
            errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
        };
        return result;
    }
}

//logout 

export async function logout(history) {

    sessionStorage.removeItem('token');
    history.push("/login")
    

}

//API Register
export async function signup(dataform) {
    let result = { data: null, isError: true, errorMessage: "" };
    const res = await client.post("/users", dataform);
    if (res.data.code === 0) {
        result = { data: res.data, isError: false, errorMessage: "" };
        return result;
    } else if (res.data.code === 1) {
        result = {
            data: null,
            isError: true,
            errorMessage: "اسم المستخدم او كلمة المرور غير صحيح",
        };
        return result;
    } else {
        result = {
            data: null,
            isError: true,
            errorMessage: "هذا الحساب لم يتم تفعيله، برجاء التفعيل والمحاولة مجددا",
        };
        return result;
    }
}

export async function confirmationCodeuser(Code) {
    let result = { data: null, isError: true, errorMessage: "" };
    const res = await client.get(`auth/confirm/${Code}`);
    if (res.data.code === 0) {
        result = { data: res.data, isError: false, errorMessage: "" };
        return result;
    } else if (res.data.code === 1) {
        result = {
            data: null,
            isError: true,
            errorMessage: "الكود غير صحيح",
        };
        return result;
    } else {
        result = {
            data: null,
            isError: true,
            errorMessage: "الكود غير صحيح",
        };
        return result;
    }
}


export async function InitializeData(dispatch) {
    try{

        let result = { data: null, isError: true, errorMessage: "" };
        const res = await client.get("/customRoutes/dataInitialization");
        console.log(res)
        if (res?.data.specialist) {
            result = { data: res.data, isError: false, errorMessage: "" };
            await dispatch({
                type: "Get_Profile_Spec",
                payload: result.data.specialist
              });
            console.log("auth1")
        }
        else if(res?.data.User){
            result = { data: res.data, isError: false, errorMessage: "" };

                await dispatch({
                  type: "Get_User",
                  payload: result.data.User
                });
                console.log("auth2")

        }
    }
    catch(e){
        console.log(e.message)
    }
} 