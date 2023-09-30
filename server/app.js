require('dotenv').config();
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var imgSchema = require('./model.js');
var fs = require('fs');
var path = require('path');
const cors = require('cors');
app.use(express.json({ limit: '10mb' }));

app.use(cors());
mongoose.connect(process.env.DBURL)
.then(console.log("DB Connected"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });


var port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})

app.get('/', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        // console.log(data);
        res.json({'imagepage':{items: data}});
        // res
    })
});

app.post('/postit', (req, res) => {
    // console.log(fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)));
    // console.log(req)
    var obj = {
        caption: req.body.caption,
        numLikes: 0,
        img: {
            data: req.body.img,
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            // console.log(item)
            res.status(200).send("Posted");
        }
    });
    res.send("Posted");
});


app.get("/health", (req, res) => {
    res.send("Hii");
})