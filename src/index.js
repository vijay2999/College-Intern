const express =require('express');
const route =require('./routes/route');
const {default:mongoose} =require('mongoose');
const app =express();

app.use(express.json())


mongoose.connect("mongodb+srv://Avipatra912:Avi878878@cluster0.kahv6oh.mongodb.net/internproject?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

.then(()=> console.log("MongoDb is connected"))
.catch (err=>console.log(err))

app.use('/',route)

app.listen(3000,function(){
 console.log('Express app running on port' +(3000))
});
