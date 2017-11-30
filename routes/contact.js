var express = require('express');
var router = express.Router();

var contacts = [
    {id:0,First_Name:'Passaporn',Last_Name:'Jirotrungroengkul',email: '58160088@go.buu.ac.th'},
    {id:1,First_Name:'Darunwan',Last_Name:'Thongkhoenkhun',email: '58160294@go.buu.ac.th'},
    {id:2,First_Name:'Chayanit',Last_Name:'Saengtongdee',email: '58160454@go.buu.ac.th'},
    {id:3,First_Name:'Nattida',Last_Name:'Rattanamalee',email: '58160461@go.buu.ac.th'},
];

var keepname = [];
router.get('/', (req, res) => { // ดู contact ทั้งหมด  **ตัวอย่าง**
    if(req.query.name) {
        contacts.forEach(function(contact) {
            if(contact.First_Name === req.query.name) {
                keepname.push(contact);  
            }

        });
        if(keepname.length > 0){
            res.json(keepname);
        }
        else{

            res.status(401);
            res.json('not found name = ' + " " + req.query.name);
        }
       
    }
    else {
        res.json(contacts);
        
    }
});

router.post('/', (req, res) => { // เพิ่ม contact
    var newContact = req.body;
    if(contacts.length) {
        newContact.id = contacts[contacts.length-1].id + 1;
        contacts.push(newContact);
    }
    else {
        newContact.id = 0;
        contacts.push(newContact);
    }
    res.json('add success');
});

router.get('/:id', (req, res) => { // ขอ contact id ที่ส่งมา
    var found = false;
    for(i = 0;i < contacts.length; i++){
        if(contacts[i].id === parseInt(req.params.id)){
            found = true;
            res.json(contacts[i]);
            break;
        }
    }
    if(!found) {
        res.json('not found');
    }
});

router.put('/:id', (req, res) => {  // แก้ไข contact ที่มี id ที่ส่งมา

    var contact = req.body;
    for(i=0 ; i < contacts.length ; i++){
        if(contacts[i].id ===  parseInt(req.params.id))
            { 
                contacts[i] = req.body;
                break; 
            }
            
     }
     res.json('edit success');

});


router.delete('/:id', (req, res) => { // ลบ contact ที่มี id ที่ส่งมา
    var id = req.params.id;
    var found = false;
    for(i=0 ; i < contacts.length ; i++){
        if(contacts[i].id ===  parseInt(id)) {
            contacts.splice(i, 1);
            found = true;
            break;
        }
    }
    if(found) {
        res.json('delete success');
    }
    else {
        res.json('not success');
    }
});




module.exports = router;