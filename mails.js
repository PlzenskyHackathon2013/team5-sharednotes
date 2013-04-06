var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "sikadevmail@gmail.com",
        pass: "qayqayqwe"
    }
});

exports.sendRegistrationMail = function () {
    smtpTransport.sendMail({
        from: "SharedNotes Robot <sikadevmail@gmail.com>",
        to: global.models.getNameByUser(global.userId)
            +"<"+global.models.getMailByUser(global.userId)+">",
        subject: "Registration mail ✔",
        text: "your account on SharedTask was created ✔"
    });
}

exports.sendReminderMail = function (userId, taskId) {
    var taskName = global.models.getTaskById(taskId).name
    
    smtpTransport.sendMail({
        from: "SharedNotes Robot <sikadevmail@gmail.com>",
        to: global.models.getNameByUser(userId)
            +"<"+global.models.getMailByUser(userId)+">",
        subject: "Remind "+taskName,
        text: "We remind you your task " + taskName
    });
}