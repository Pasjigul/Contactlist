var express = require('express');
var router = express.Router();

var contacts = [];



router.get('/', (req, res) => { // ดู contact ทั้งหมด  **ตัวอย่าง**
    if(req.query.name) {
        contacts.forEach(function(contact) {
            if(contact.first_name === req.query.name) {
                res.json(contact);
            }
        });
        res.status(401);
        res.json('not found name = ' + " " + req.query.name);
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







});

router.put('/:id', (req, res) => {  // แก้ไข contact ที่มี id ที่ส่งมา






});


router.delete('/:id', (req, res) => { // ลบ contact ที่มี id ที่ส่งมา









});




module.exports = router;