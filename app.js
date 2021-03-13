const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

//retrive data(resource)
app.use(bodyParser.json());
const StudentsList=[
    {
name:'shada',
id:11923565,
dateOfBirth:'14/2/2002',
gpa:3
    },
    {
name:'hala',
id:11923333,
dateOfBirth:'9/4/2001',
gpa:3.5
},
{
name:'shahd',
id:11923777,
dateOfBirth:'5/5/2001',
gpa:3.2
},
{
name:'omar',
id:11923222,
dateOfBirth:'4/2/2002',
gpa:4
    },
]

app.get('/StudentsList',(req, res)=>{
res.status(200).json(StudentsList);

})
    


//add data(resource)
app.post('/StudentsList',(req, res)=>{
    let requsetBody =req.body;//name
    StudentsList.push(requsetBody);
    
    res.status(201).json(requsetBody)
    
})

app.put('StudentsList', function (req, res) {
    res.send('Got a PUT request at /StudentsList')
  })
//app.delete
app.delete('/StudentsList', function (req, res) {
    res.send('Got a DELETE request at /StudentsList')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})