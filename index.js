const fs = require('fs');
const axios = require('axios');

function install(URL) {
    axios
        .get(URL)
        .then(res => {
            const host = res.request.host;
            let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let text = "";
            for (let i = 0; i < 8; i++)
                text += charset.charAt(Math.floor(Math.random() * charset.length));
            fs.writeFile("./plugins/" + host.replace(".", "_") + "-" + text + '.txt', res.data, (err) => {
                if (err) throw err;
            });

        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = install;