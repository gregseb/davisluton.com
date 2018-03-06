import $ from 'jquery';


export async function authUser() {
    const currentUser = getCurrentUser();

    if (currentUser === null) {
        return false;
    }

    await verifyAuthToken(currentUser.token);
    return true;
}


export function signOutUser() {
    /* TODO figure out how to expire existing jwt tokens and actually log the user out on the server-side...
     * For now we'll just remove the auth-info... */
    localStorage.removeItem('site-auth-info');
}


function verifyAuthToken(token) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/token/verify/',
            method: "POST",
            cache: false,
            data: '{"token": "'+ token + '"}',
            contentType: 'application/json',
            success: function(response) {
                resolve(response);
            },
            error: function(xhr, status, err) {
                localStorage.removeItem('site-auth-info');  // If verification fails... remove the auth session var.
                reject('/api/auth/login/ ' + status + ' ' + err.toString());
            }
        })
    });
}


export function getCurrentUser() {
    let userAuthInfo = localStorage.getItem('site-auth-info');
    if (userAuthInfo === null) {
        return null;
    }
    return JSON.parse(userAuthInfo);
}


export async function refreshAuth() {
    let currentUser = getCurrentUser();

    if (currentUser === null) {
        return false;
    }
    // Decode the current token...
    const token = currentUser.token;
    const decodedToken = JSON.parse(atob(token.split('.')[1]));

    // Figure out how much time is left.
    const currentTime = Math.floor(Date.now() / 1000);
    const secsLeft = Math.floor((decodedToken.exp - currentTime));

    // Go ahead and refresh the token if there's less than half an hour left...
    if (secsLeft < 60 * 30) {
        await refreshAuthToken(currentUser);
    }

    return true;
}


function refreshAuthToken(current_user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/api/token/refresh/',
            method: "POST",
            cache: false,
            data: '{"token": "'+ current_user.token + '"}',
            contentType: 'application/json',
            success: function(response) {
                current_user.token = response.token;
                localStorage.setItem('site-auth-info', JSON.stringify(current_user));

                resolve(response);
            },
            error: function(xhr, status, err) {
                localStorage.removeItem('site-auth-info');  // If verification fails... remove the auth session var.
                reject('/api/auth/login/ ' + status + ' ' + err.toString());
            }
        })
    });
}
