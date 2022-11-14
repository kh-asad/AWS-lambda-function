exports.handler = async function (event:any){
    console.log("Hello World")
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello ${event.name}, this is SkipQ ${event.cohort}`
      };
}