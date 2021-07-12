function makeQuery(r) {

    //var query = 'SELECT count(*) FROM netzdaten';
    var url = 'http://localhost:8086/query?u=sag_admin&p=sag_admin&db=datenTankenDB&q=SHOW MEASUREMENTS'; //REST API call that return json results from Influx Database

    ngx.fetch(url)
    .then(reply => reply.text() /*r.return(reply.status, reply.url)*/
            //return reply.json();
    )
    .then(body => {
             r.return(200, body)
    })
    //.then(reply => r.return(reply.status, reply.responseBody))
    .catch(e => r.return(501, e.message));

}

function hello(r) {
    r.return(200, "Hello World!");
}
export default { makeQuery, hello }
