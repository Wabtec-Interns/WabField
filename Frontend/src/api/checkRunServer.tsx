/* eslint-disable @typescript-eslint/no-unused-vars */
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export async function checkRunServer() {
    try {
        const response = await fetch(`${backendUrl}/consulting`);
        if (response.ok) {
            console.log('Server is running');
        } else {
            console.log('Server is not running');
        }
    } catch (error) {
        console.error('Server is not running');
    }
}