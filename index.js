//nodejs function logs

module.exports=async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    context.log("convert with function mytest");
    var a=mytest(context,name);
    
    context.log("set response");
    const responseMessage = a
        ? "Hello, " + a + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

var mytest=function(context,b)
{
    context.log("start mytest");
    if(b=="124")
    {
        context.log("input is 124");
        return "this is 124 + new";
    }
    else 
    {
        context.log("input is others");
        return "other number + old";
    }
   
}
