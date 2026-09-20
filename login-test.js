const username = "testuser";
const password = "123456";

function loginTest(username, password) {
    console.log("Testing login...");

    if (username && password) {
        console.log("Login test passed");
    } else {
        console.log("Login test failed");
    }
}

loginTest(username, password);