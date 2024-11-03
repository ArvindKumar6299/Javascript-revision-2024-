function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending email to ${to} with subject ${subject}: ${body}`);
        }
    }
}
let step1 = sendAutoEmail("arvind6299697165@gmail.com");
let step2 = step1("new order confermation");
step2("Hey Arvind , Here is something for you! you will love this.......")