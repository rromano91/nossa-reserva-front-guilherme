export const API_URL = 'http://localhost:8080/';

export function TOKEN_POST(body) {
    return{
        url: API_URL + 'ENDPOINT',
        options: {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        },
    }
}


export function USER_GET(token) {
    return{
        url: API_URL + 'ENDPOINT',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            }

        }
    }
}


export function TOKEN_VALIDATE_POST(token) {
    return {
        url: API_URL + 'ENDPOINT',
        options: {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    }
}


export function CONDOMINIO_GET() {
    return{
        url: API_URL + 'condominio',
    }
}

export function CONDOMINIO_POST(body) {
    return{
        url: API_URL + 'condominio',
        options: {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
    }
}