


export const verifyOTP = async(otp) => {
    return { success: true, message:"The OTP you entered is incorrect. Please try again."}
}


export const verifyLogin = async (data) => {
    return { success: true, message: "Invalid username or password. Please check your credentials and try again." }
}


export const sendOTP = async (data) => {
    return { success: true, message: "Email not registered. Please check and try again." }
}

export const changePassword = async (data) => {
    return { success: true, message: "Something went wrong." }
}