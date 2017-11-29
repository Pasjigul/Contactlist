var express = require('express');
var router = express.Router();

var contacts = [];

router.get('/:name', (req, res) => { // ค้นหา contact ที่มี first name ตรงกับ name ที่ส่งมา
    res.json(req.params.name);
});


router.get('/', (req, res) => { // ดู contact ทั้งหมด  **ตัวอย่าง**
    res.json(contacts);    
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
    let id = req.params.id
        res.json(contacts[id]);
});

router.put('/:id', (req, res) => {  // แก้ไข contact ที่มี id ที่ส่งมา



});


router.delete('/:id', (req, res) => { // ลบ contact ที่มี id ที่ส่งมา









});




module.exports = router;