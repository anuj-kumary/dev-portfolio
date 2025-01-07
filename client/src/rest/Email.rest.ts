import axios from "axios"

export const sendMail = async (formData: { name: string; email: string; message: string }) => {
    try {
        const emailResponse = await axios.post("https://dev-portfolio-6608.onrender.com/api/send-email",
            formData
        )
        return emailResponse
    } catch (error) {
        throw error
    }
}