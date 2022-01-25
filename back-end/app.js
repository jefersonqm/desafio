const express = require('express');
var cors = require('cors');

const app = express();
const uploadUser = require('./middleware/uploadimage');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type");
    app.use(cors());
    next();
});

app.use(cors());

app.post('/upload-image', uploadUser.single('image'), async (req,res) => {

    if(req.file){
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.json({
        erro:false,
        mensagem: "Upload ok!"
    });
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
