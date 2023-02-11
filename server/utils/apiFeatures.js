class ApiFeatures{
    constructor(query,queryStr)
    {
        this.query=query;
        this.queryStr=queryStr;

    }
    search()
    {
        const keyword=this.queryStr.keyword?{
            category:{
                $regex:this.queryStr.keyword,
                $options:"i"
            }

        }:{}
        this.query=this.query.find({...keyword});
        console.log(this.queryStr.keyword);
        return this;
    }
    filter()
    {
        const queryCopy={...this.queryStr};
        const removeFields=["keyword"];
        removeFields.forEach(key=>delete queryCopy[key]);
        let queryStr=JSON.stringify(queryCopy)
        queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g,key=>`$${key}`);
        this.query=this.query.find(JSON.parse(queryStr));
        return this;
    }
}
module.exports=ApiFeatures;