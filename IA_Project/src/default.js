const  app=require('./app').app;
const createExam=require('./controllers/createExam');
app.post('/exam', async function (req, res) {
    console.log(req.body);
   await createExam.createExam(req,res);

});